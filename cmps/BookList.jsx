import { BookPreview } from "./BookPreview.jsx"
import {BookDetails} from "./BookDetails.jsx"

export function BookList(props) {
   
    return (
        <ul className="booklist">{
            props.books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookPreview book={book} />
                        
                    </li>
                )
            })
        }</ul>
    )
}