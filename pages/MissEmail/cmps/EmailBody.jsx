import eventBusService from '../../../services/event-bus-service.js'
export class EmailBody extends React.Component {




    render() {

        return (
            <section className="email-body">
                <div title="Go back" onClick={() => this.props.onHideEmail(this.props.email)} className="btn-back">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <p>{this.props.email.from}</p>
                <h2>{this.props.email.subject}</h2>
                <p>{this.props.email.body}</p>
                <img src={this.props.email.img} />
                <button onClick={() => {
                    eventBusService.emit('composeReply', { subject: this.props.email.subject, body: this.props.email.body, from: this.props.email.from, file: this.props.email.file })
                }}>REPLY</button>
            </section>
        )
    }

}