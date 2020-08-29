import { emailService } from '../service/miss-email-service.js'
import { EmailList } from './EmailList.jsx'
import { EmailCompose } from './EmailCompose.jsx'
import eventBusService from '../../../services/event-bus-service.js'
export class EmailApp extends React.Component {

    state = {
        emails: null,
        isComposing: false,
        replyDetails: '',
        noteDetails: '',
        progress: 0
    }


    componentDidMount() {

        this.loadEmails()
        eventBusService.on('composeNote', this.onComposeNote)
        eventBusService.on('composeReply', this.onComposeReply)
    }


    onComposeNote = (noteDetails) => {
        this.setState({ noteDetails })
        this.setState({ isComposing: true })

    }
    onComposeReply = (replyDetails) => {
        console.log('', replyDetails.target)
        this.setState({ isComposing: true })
        this.setState({ replyDetails })
    }
    onStartCompose = () => {
        this.setState({ isComposing: true })
    }
    loadEmails() {
        emailService.getEmails()
            .then(({ emails, percentage }) => {
                this.setState({ emails, progress: percentage })
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
    onEndCompose = (emailDetails) => {
        this.setState({ noteDetails: '' })
        this.setState({ replyDetails: '' })
        emailService.addEmail(emailDetails, true)
        this.setState({ isComposing: false })
        this.loadEmails()
    }
    onSortBy = (ev) => {
        emailService.sortEmails(ev.target.value)
        this.loadEmails()
    }

    onSearchByTxt = (txt) => {
        this.setState({ emails: emailService.getAfterSearch(txt) })

    }
    updateProgBar = () => {
        this.loadEmails()
    }
    render() {

        const { emails } = this.state
        if (!emails) return <h1>Loading...</h1>

        return (
            <section className="email-app">
                <EmailList updateProgBar={this.updateProgBar} progress={this.state.progress} onSearchByTxt={this.onSearchByTxt} onSortBy={this.onSortBy} onStartCompose={this.onStartCompose} onRemoveEmail={this.onRemoveEmail} onAddEmail={this.onAddEmail} emails={emails} />
                {this.state.isComposing && <EmailCompose noteDetails={this.state.noteDetails} replyDetails={this.state.replyDetails} onEndCompose={this.onEndCompose} onAddEmail={this.onAddEmail} />}
            </section>
        )
    }
}



