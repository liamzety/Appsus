const {Link} = ReactRouterDOM;

import eventBus from '../services/event-bus-service.js'

export class UserMsg extends React.Component {
    state = {
        isShown: false,
        msg: '',
        type: '',
        bookId:''
    }
    unsubscribe;
    componentDidMount() {
        this.unsubscribe = eventBus.on('notify', (data) => {
            
            this.setState({ isShown: true, msg: data.msg, type: data.type, bookId:data.bookId })
            setTimeout(() => this.setState({ isShown: false }), 3000)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const { isShown, msg, type, bookId } = this.state
        return (
            <div className={ `notification-box ${type}` }>
                { isShown && <span onClick={ () => this.setState({ isShown: false }) }>X</span> }
                { isShown && <h2>Notification - { msg }</h2> }
                {bookId && <Link to={"/books/"+bookId}>
                {isShown && <h3>Check It Out!</h3>}
                </Link>}
            </div>
        )
    }
}