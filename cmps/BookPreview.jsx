const { Link } = ReactRouterDOM

export function BookPreview(props) {


    var currency;

    switch (props.book.listPrice.currencyCode) {
        case 'EUR':
            currency = '€'
            break;
        case 'ILS':
            currency = '₪'
            break;
        case 'USD':
            currency = '$'
            break;

        default:
            break;
    }

    return (

        <Link to={`books/${props.book.id}`}>
            <ul id={props.book.id} className="book-preview">
                <li><img className="list-image" src={props.book.thumbnail} alt="" /></li>
                <li><h2>{props.book.title}</h2></li>
                <li>{props.book.listPrice.amount}
                    {currency}
                </li>

            </ul>
        </Link>
    )
}