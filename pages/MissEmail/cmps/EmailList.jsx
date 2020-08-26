import { EmailPreview } from './EmailPreview.jsx'
import { EmailBody } from './EmailBody.jsx'


export class EmailList extends React.Component {

    state = {
        isEmailShown: false,
        emailToShow: ''
    }

    onShowEmail = (email) => {
        this.setState({ isEmailShown: !this.state.isEmailShown })
        this.setState({ emailToShow: email })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.isEmailShown &&
                    <section className="email-list">

                        {this.props.emails.map((email, idx) => {
                            return (
                                <div key={idx}>
                                    <EmailPreview onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                                </div>
                            )
                        }) || <h1>no emails</h1>}

                    </section>
                }


                {this.state.emailToShow && <EmailBody onShowEmail={this.onShowEmail} email={this.state.emailToShow} />}

            </React.Fragment>
        )
    }

}