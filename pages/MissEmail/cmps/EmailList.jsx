import { EmailPreview } from './EmailPreview.jsx'
import { EmailBody } from './EmailBody.jsx'
import { emailService } from '../service/miss-email-service.js'


export class EmailList extends React.Component {

    state = {
        isEmailShown: false,
        emailToShow: ''
    }

    onShowEmail = (email) => {
        emailService.emailRead(email)
        this.setState({ isEmailShown: true })
        this.setState({ emailToShow: email })
    }
    onHideEmail = () => {
        this.setState({ isEmailShown: false })
    }

    render() {
        return (
            <React.Fragment>
                <section className="email-list">
                    <div className="side-filter">

                        <button className="btn-compose" onClick={this.props.onStartCompose}>Compose</button>
                        <div className="filter-item">
                            <p> Starred</p>
                        </div>
                        <div className="filter-item">
                            <p> All mails</p>
                        </div>
                        <div className="filter-item">
                            <p> Deleted</p>
                        </div>
                        <div className="filter-item">
                            <p> Drafts</p>
                        </div>
                        <div className="filter-item">
                            <p> Sent</p>
                        </div>




                    </div>
                    {!this.state.isEmailShown &&
                        <div className="email-previews-container">
                            {this.props.emails.map((email, idx) => {
                                return (
                                    <div key={idx}>
                                        <EmailPreview onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                                    </div>
                                )
                            }) || <h1>no emails</h1>}
                        </div>

                    }
                    {this.state.emailToShow && this.state.isEmailShown && <EmailBody onHideEmail={this.onHideEmail} onShowEmail={this.onShowEmail} email={this.state.emailToShow} />}
                </section>



            </React.Fragment>
        )
    }

}