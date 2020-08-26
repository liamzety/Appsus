import {bookService} from "../services/book-service.js"
import eventBus from '../../../services/event-bus-service.js'

export class ReviewAdd extends React.Component {

    state={
        book:this.props.book,
        name: bookService.getDefault().name,
        date:bookService.getDefault().date
    }

    componentDidMount(){
      this.setState({reviews: this.state.book.reviews})
      this.elInput.current.focus()
    }

    elInput = React.createRef()

    addReview=()=>{
        const review={
            name:this.state.name,
            rating: this.state.rating,
            date: this.state.date,
            text:this.state.text
        }
        bookService.addReview(this.state.book.id, review)
        .then(reviews=> this.setState({reviews}))

        eventBus.emit('notify', {bookId:'', msg: 'Review Saved', type: 'success' })

    }

    setValue=(ev)=>{
        
       this.setState({[ev.target.name]: ev.target.value})  
    }

    removeReview=(reviewId)=>{
        
        bookService.removeReview(reviewId,this.state.book.id)
        .then(reviews=> this.setState({reviews}))
    }

    render() {
        
        return (
            <section>               
                <form className="review-add">
                <h3>Add a Review</h3>
                    Name:<input ref={this.elInput} name="name" type="text" value={this.state.name} onChange={this.setValue}/>
            Rating:<select name="rating" onChange={this.setValue}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
            Read At: <input name="date" type="date" value={this.state.date} onChange={this.setValue} />
            Review: <textarea name="text" rows="4" cols="50" onChange={this.setValue}/>
                    <button className="submit-button" type="button" onClick={this.addReview}>Submit</button>
                </form>
            
{!this.state.reviews ? '' : <div className="reviews">
                    <ul className="reviews-list">
                        {this.state.reviews.map((review)=>
                             <ul key={review.id}>
                                 <li><h3>{review.name}</h3></li>
                                 <li>Rating:{review.rating}</li>
                                 <li >Date read:{review.date}</li>
                                 <li>{review.text}</li>
                                 <li><button className="delete-button" onClick={()=>this.removeReview(review.id)}>X</button></li>
                                 </ul>)}
                    </ul>
                </div> }
               
            </section>
        )
    }
}