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
        console.log('addemail',)
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
    onEndCompose = () => {
        this.setState({ isComposing: false })
    }

    render() {
        const { emails } = this.state
        if (!emails) return <h1>Loading...</h1>

        return (
            <section className="email-app">
                <button onClick={this.onStartCompose}>Compose</button>
                {this.state.isComposing && <EmailCompose onEndCompose={this.onEndCompose} onAddEmail={this.onAddEmail} />}
                <EmailList onRemoveEmail={this.onRemoveEmail} onAddEmail={this.onAddEmail} emails={emails} />
            </section>
        )
    }
}



