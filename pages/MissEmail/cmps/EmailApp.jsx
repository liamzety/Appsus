import { emailService } from '../service/miss-email-service.js'
import { EmailList } from './EmailList.jsx'

export class EmailApp extends React.Component {

    state = {
        emails: null
    }


    componentDidMount() {
        this.loadEmail()

    }

    loadEmail() {
        emailService.getEmails()
            .then((res) => {
                this.setState({ emails: res })
            })
    }

    addEmail = () => {
        this.loadEmail()
    }

    render() {
        const { emails } = this.state
        if (!emails) return <h1>Loading...</h1>

        return (
            <section>
                <EmailList addEmail={this.addEmail} emails={emails} />
            </section>
        )
    }
}