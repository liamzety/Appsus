import { emailService } from '../service/miss-email-service.js'
import { EmailList } from './EmailList.jsx'
import { EmailCompose } from './EmailCompose.jsx'
export class EmailApp extends React.Component {

    state = {
        emails: null,
        isComposing: false
    }


    componentDidMount() {
        this.loadEmails()

    }
    loadEmails() {
        console.log('hi',)
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
    onStartCompose = () => {
        this.setState({ isComposing: true })
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
                {this.state.isComposing && <EmailCompose onEndCompose={this.onEndCompose} onAddEmail={this.onAddEmail} />}
            </section>
        )
    }
}



