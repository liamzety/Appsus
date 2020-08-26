import { EmailPreview } from './EmailPreview.jsx'
import { emailService } from '../service/miss-email-service.js'
export class EmailList extends React.Component {


    render() {

        return (
            <section>
                {/* compose */} <button onClick={() => {
                    emailService.saveEmail()
                    this.props.addEmail()
                }}>add</button>
                {this.props.emails.map((email, idx) => {
                    return (
                        <div key={idx}>
                            <EmailPreview email={email} />
                        </div>
                    )
                })}

            </section>
        )
    }

}