import { emailService } from '../service/miss-email-service.js'
import { EmailList } from './EmailList.jsx'
import { EmailCompose } from './EmailCompose.jsx'
import eventBusService from '../../../services/event-bus-service.js'
export class EmailApp extends React.Component {

    state = {
        emails: null,
        isComposing: false,
        replayDetails: ''
    }


    componentDidMount() {
        this.loadEmails()
        eventBusService.on('compose', this.onStartCompose)
    }
    loadEmails() {
        emailService.getEmails()
            .then((emails) => {
                this.setState({ emails })
            })
    }
    onAddEmail = (emailDetails) => {
        this.setState({ isComposing: false })
        emailService.addEmail(emailDetails)
        this.loadEmails()
    }
    onRemoveEmail = (emailId) => {
        emailService.removeEmail(emailId)
        this.loadEmails()
    }
    onStartCompose = (replayDetails) => {
        console.log(replayDetails);
        this.setState({ isComposing: true })
        this.setState({ replayDetails })
    }
    onEndCompose = (emailDetails) => {
        emailService.addEmail(emailDetails, true)
        this.setState({ isComposing: false })
        this.loadEmails()
    }

    render() {
        const { emails } = this.state
        if (!emails) return <h1>Loading...</h1>

        return (
            <section className="email-app">

                <EmailList onStartCompose={this.onStartCompose} onRemoveEmail={this.onRemoveEmail} onAddEmail={this.onAddEmail} emails={emails} />
                {this.state.isComposing && <EmailCompose replayDetails={this.state.replayDetails} onEndCompose={this.onEndCompose} onAddEmail={this.onAddEmail} />}
            </section>
        )
    }
}



