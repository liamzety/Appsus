const { Link } = ReactRouterDOM

import { LongTxt } from "./LongTxt.jsx";
import { bookService } from "../services/book-service.js"
import { ReviewAdd } from "./ReviewAdd.jsx"

export class BookDetails extends React.Component {

    state = {
        book: null,
        currency: null,
        pageCount: null,
        price: null,
        yearNow: new Date().getFullYear()

    }

    componentDidMount() {
        const bookId = this.props.match.params.bookId

        this.loadBook()

        bookService.selectBook(bookId)
            .then(book => {
                this.setState({ book })
                this.getPrice()
                this.getCurrency()
                this.getPageCount()

            })

    }

    loadBook = () => {

        bookService.query()
            .then(books =>
                this.setState({ books })
            )
    }


    getCurrency = () => {

        switch (this.state.book.listPrice.currencyCode) {
            case 'EUR':
                this.setState({ currency: '€' })
                break;
            case 'ILS':
                this.setState({ currency: '₪' })
                break;
            case 'USD':
                this.setState({ currency: '$' })
                break;

            default:
                break;
        }
    }


    getPageCount = () => {

        if (this.state.book.pageCount > 500) this.setState({ pageCount: "Long read" })
        else if (this.state.book.pageCount > 200 && this.state.book.pageCount < 500) this.setState({ pageCount: "Decent read" })
        else this.setState({ pageCount: "Short read" })

    }

    getPrice = () => {

        if (this.state.book.listPrice.amount > 150) this.setState({ price: "red" })
        else if (this.state.book.listPrice.amount < 20) this.setState({ price: "green" })
        else this.setState({ price: "" })
    }

    componentDidUpdate(prevProps, prevState) {

        console.log('Prev', prevProps);
        console.log('Curr', this.props);
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            bookService.selectBook(this.props.match.params.bookId)
                .then(book => {
                    this.setState({ book })
                    this.getPrice()
                    this.getCurrency()
                    this.getPageCount()

                })
        }
    }


    render() {


        if (!this.state.book) return <div>Loading...</div>
        const { prevBook, nextBook } = bookService.getNextPrev(this.state.book.id)

        return (

            <section className="book-details">
                <Link to="/miss-books">
                    <div className="back-button">
                        <i className="fas fa-arrow-left">

                        </i></div>
                </Link>
                <ul className="book-details-list">

                    <li className="book-details-image">
                        <img src={this.state.book.thumbnail} />
                        {this.state.book.listPrice.isOnSale ?
                            <div className="sale-triangle">
                                <div className="triangle"></div>
                                <div className="on-sale"><h1>On<br /> Sale!</h1></div>

                            </div>
                            : ''}
                    </li>
                    <section className="book-info">
                        <li>
                            <h1>
                                {this.state.book.title}
                            </h1>
                        </li>
                        <li>
                            <ul>
                                Author/s: {this.state.book.authors.map(author => <li>{author}</li>)}
                            </ul>
                        </li>
                        <LongTxt text={this.state.book.description} />
                        <li>
                            Language: {this.state.book.language}
                        </li>
                        <li className={this.state.price}>
                            Price: {this.state.book.listPrice.amount}{this.state.currency}
                        </li>
                        <li>
                            Pages: {this.state.book.pageCount} {this.state.pageCount}
                        </li>
                        <li>
                            Published At: {this.state.book.publishedDate} {this.state.yearNow - this.state.book.publishedDate > 10 ? "Veteran Book" : "New!"}
                        </li>
                    </section>
                </ul>

                <div>
                    <ReviewAdd book={this.state.book} />
                </div>
                <div className="prev-next">
                    <Link to={`/miss-books/${prevBook}`}>
                        <button>Previous</button>
                    </Link>
                    <Link to={`/miss-books/${nextBook}`}>
                        <button>Next</button>
                    </Link>
                </div>

            </section>
        )
    }
}