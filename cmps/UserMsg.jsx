
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
            
            this.setState({ isShown: true, msg: data.msg, type: data.type})
            setTimeout(() => this.setState({ isShown: false }), 3000)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const { isShown, msg, type } = this.state
        return (
            <div className={ `notification-box ${type}` }>
                { isShown && <button className="notification-close" onClick={ () => this.setState({ isShown: false }) }><i className="fas fa-times"></i></button> }
                { isShown && <h3>Notification - { msg }</h3> }
            </div>
        )
    }
}