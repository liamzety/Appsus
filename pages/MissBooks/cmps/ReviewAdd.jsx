import { bookService } from "../services/book-service.js"
import eventBus from '../../../services/event-bus-service.js'

export class ReviewAdd extends React.Component {

    state = {
        book: this.props.book,
        name: bookService.getDefault().name,
        date: bookService.getDefault().date
    }

    componentDidMount() {
        this.setState({ reviews: this.state.book.reviews })
        this.elInput.current.focus()
    }

    elInput = React.createRef()

    addReview = () => {
        const review = {
            name: this.state.name,
            rating: this.state.rating,
            date: this.state.date,
            text: this.state.text
        }
        bookService.addReview(this.state.book.id, review)
            .then(reviews => this.setState({ reviews }))

        eventBus.emit('notify', { bookId: '', msg: 'Review Saved', type: 'success' })

    }

    setValue = (ev) => {

        this.setState({ [ev.target.name]: ev.target.value })
    }

    removeReview = (reviewId) => {

        bookService.removeReview(reviewId, this.state.book.id)
            .then(reviews => this.setState({ reviews }))
    }

    render() {

        return (
            <section>
                <form className="review-add">
                    <h3>Add a Review</h3>

                    <div className="name-add">
                        Name:<br/>
                        <input ref={this.elInput} name="name" type="text" value={this.state.name} onChange={this.setValue} />
                    </div>

                    <div className="rating-add">
                        Rating:
                        <br/>
                        <div className="rate">
                       <form action="">     
              <input
                onChange={this.setValue}
                type="radio"
                id="star5"
                name="rating"
                value="5"
              />
              <label htmlFor="star5" title="text">
                5 stars
              </label>
              <input
                onChange={this.setValue}
                type="radio"
                id="star4"
                name="rating"
                value="4"
              />
              <label htmlFor="star4" title="text">
                4 stars
              </label>
              <input
                onChange={this.setValue}
                type="radio"
                id="star3"
                name="rating"
                value="3"
              />
              <label htmlFor="star3" title="text">
                3 stars
              </label>
              <input
                onChange={this.setValue}
                type="radio"
                id="star2"
                name="rating"
                value="2"
              />
              <label htmlFor="star2" title="text">
                2 stars
              </label>
              <input
                onChange={this.setValue}
                type="radio"
                id="star1"
                name="rating"
                value="1"
              />
              <label htmlFor="star1" title="text">
                1 star
              </label>
           
        </form></div>
        
                        <select className="rating" name="rating" onChange={this.setValue}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="date-add">
                        Read At: <br/>
                        <input name="date" type="date" value={this.state.date} onChange={this.setValue} />
                    </div>

                    <div className="tex-add">
                        Review:<br/>
                         <textarea name="text" rows="4" cols="50" onChange={this.setValue} />
                    </div>
                        <button className="submit-button" type="button" onClick={this.addReview}>Submit</button>
                </form>

                {!this.state.reviews ? '' :
                    <ul className="reviews-list">
                        {this.state.reviews.map((review) =>
                            <ul key={review.id} className="review">
                                
                                <button className="delete-button" onClick={() => this.removeReview(review.id)}>X</button>
                                
                                <div className="review-details">
                                <li><h3>{review.name}</h3></li>
                                <li>Rating:{review.rating}</li>
                                <li >Date read:{review.date}</li>
                                <li>{review.text}</li>
                                </div>
                            </ul>)}
                  
                            </ul>}

            </section>
        )
    }
}