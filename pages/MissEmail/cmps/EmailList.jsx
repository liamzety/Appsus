import { EmailPreview } from './EmailPreview.jsx'
import { EmailBody } from './EmailBody.jsx'
import { emailService } from '../service/miss-email-service.js'


export class EmailList extends React.Component {

    state = {
        emailToShow: '',
        isEmailShown: false,
        isStarredShown: false,
        isDeletedShown: false,
        isDraftsShown: false,
        isSentShown: false
    }

    onShowEmail = (email) => {
        emailService.emailRead(email)
        this.setState({ isEmailShown: true, emailToShow: email })

    }
    onHideEmail = () => {
        this.setState({ isEmailShown: false })
    }

    onStarEmail = (email) => {
        emailService.emailStar(email)
        this.setState({})
    }
    onShowStarred = () => {
        this.onShowAll()
        this.setState({ isStarredShown: true })
    }
    onShowAll = () => {
        this.setState({ isStarredShown: false, isEmailShown: false, isDeletedShown: false, isDraftsShown: false, isSentShown: false })
    }
    onShowDeleted = () => {
        this.onShowAll()
        this.setState({ isDeletedShown: true })
    }
    onShowDrafts = () => {
        this.onShowAll()
        this.setState({ isDraftsShown: true })

    }
    onShowSent = () => {
        this.onShowAll()
        this.setState({ isSentShown: true })

    }
    render() {
        return (
            <React.Fragment>
                <section className="email-list">
                    <div className="side-filter">

                        <button className="btn-compose" onClick={this.props.onStartCompose}>Compose</button>
                        <div onClick={this.onShowStarred} className="filter-item">
                            <p>Starred</p>
                        </div>
                        <div onClick={this.onShowAll} className="filter-item">
                            <p> All mails</p>
                        </div>
                        <div onClick={this.onShowDeleted} className="filter-item">
                            <p> Deleted</p>
                        </div>
                        <div onClick={this.onShowDrafts} className="filter-item">
                            <p> Drafts</p>
                        </div>
                        <div onClick={this.onShowSent} className="filter-item">
                            <p> Sent</p>
                        </div>
                    </div>
                    {/* SHOW SENT */}
                    {!this.state.isEmailShown && !this.state.isStarredShown && !this.state.isDeletedShown && !this.state.isDraftsShown && this.state.isSentShown &&
                        <div className="email-previews-container">
                            {this.props.emails.map((email, idx) => {
                                if (email.isSent)
                                    return (
                                        <div key={idx}>
                                            <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                                        </div>
                                    )
                            })}
                        </div>
                    }
                    {/* SHOW DRAFTS */}
                    {!this.state.isEmailShown && !this.state.isStarredShown && !this.state.isDeletedShown && this.state.isDraftsShown && !this.state.isSentShown &&
                        <div className="email-previews-container">
                            {this.props.emails.map((email, idx) => {
                                if (email.isDraft)
                                    return (
                                        <div key={idx}>
                                            <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                                        </div>
                                    )
                            })}
                        </div>
                    }
                    {/* SHOW ALL */}
                    {!this.state.isEmailShown && !this.state.isStarredShown && !this.state.isDeletedShown && !this.state.isDraftsShown && !this.state.isSentShown &&
                        <div className="email-previews-container">
                            {this.props.emails.map((email, idx) => {
                                if (!email.isDeleted && !email.isDraft)
                                    return (
                                        <div key={idx}>
                                            <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                                        </div>
                                    )
                            })}
                        </div>

                    }
                    {/* SHOW STARRED */}
                    {!this.state.isEmailShown && this.state.isStarredShown && !this.state.isDeletedShown && !this.state.isDraftsShown && !this.state.isSentShown &&
                        <div className="email-previews-container">
                            {this.props.emails.map((email, idx) => {
                                if (email.isStar && !email.isDeleted && !email.isDraft) {
                                    return (
                                        <div key={idx}>
                                            <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                                        </div>
                                    )

                                }
                            })}
                        </div>

                    }
                    {/* SHOW DELETED */}
                    {!this.state.isEmailShown && !this.state.isStarredShown && this.state.isDeletedShown && !this.state.isDraftsShown && !this.state.isSentShown &&
                        <div className="email-previews-container">
                            {this.props.emails.map((email, idx) => {
                                if (email.isDeleted && !email.isDraft) {
                                    return (
                                        <div key={idx}>
                                            <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                                        </div>
                                    )

                                }
                            })}
                        </div>
                    }
                    {this.state.emailToShow && this.state.isEmailShown && <EmailBody onHideEmail={this.onHideEmail} onShowEmail={this.onShowEmail} email={this.state.emailToShow} />}
                </section>



            </React.Fragment>
        )
    }

}