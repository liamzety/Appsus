import { bookService } from '../services/book-service.js'
import { BookList } from "../cmps/BookList.jsx";
import { BookDetails } from "../cmps/BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookAdd } from "../cmps/BookAdd.jsx";
import eventBus from '../../../services/event-bus-service.js'



export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: '',
        filterByPrice: {
            min: -Infinity,
            max: Infinity
        },
        searchedBooks:'',
        searchValue:''
    }

    componentDidMount() {
        this.loadBooks()

    }

    loadBooks() {
        bookService.query()
            .then(books =>
                this.setState({ books })
            )
    }


    onSelectBook = (bookId) => {

        bookService.selectBook(bookId)
            .then(book => this.setState({ bookSelected: book }))

    }

    onSetFilterByName = (filterBy) => {

        this.setState({ filterBy })
    }


    setFilterByPrice = (evTarget) => {
        this.setState({ filterByPrice: { ...this.state.filterByPrice, [evTarget.name]: +evTarget.value } })
    }


    booksToShowByPrice() {

        
        const filteredBooks = this.state.books.filter((book) => {
            return (book.listPrice.amount > this.state.filterByPrice.min) && (book.listPrice.amount < this.state.filterByPrice.max)
        })
        if (this.state.filterByPrice.min === 0 && this.state.filterByPrice.max === 0) return this.state.books
        
        return filteredBooks
    }

    booksToShow() {
        
        const filteredBooksByPrice = this.booksToShowByPrice()
        return filteredBooksByPrice.filter(book => book.title.toLowerCase().includes(this.state.filterBy))
    }

    searchForBooks=(event)=>{
        
        const inputVal= event.target.value
    
        bookService.searchBooks(inputVal)
        .then((result)=>{
            this.setState({searchedBooks: result})
            this.setState({searchValue:inputVal})
            })

    }

    addGoogleBook(book){
        bookService.addGoogleBook(book)
        .then(books=> this.setState({books}))

        eventBus.emit('notify', {bookId: book.id, msg: `Book Added`, type: 'success' })
    }


    render() {
        
        const books = this.booksToShow()
        
        const searchedBooks= this.state.searchedBooks

        return (

            <section>
                {!this.state.bookSelected && <BookAdd searchForBooks={this.searchForBooks}/>}
                {!this.state.searchValue ? '' : <ul>
                    {searchedBooks.map(book=> <li>{book.volumeInfo.title} <button className="search-add-button" onClick={()=>this.addGoogleBook(book)}>+</button></li>)}
                    </ul>}
                {!this.state.bookSelected && <BookFilter filterBy={this.state.filterBy} setFilterByName={this.onSetFilterByName} setFilterByPrice={this.setFilterByPrice} />}
                {!this.state.bookSelected && <BookList books={books} />}
                {this.state.bookSelected && <BookDetails book={this.state.bookSelected} />}
            </section>
        )
    }
}