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
        isSentShown: false,
        isHamburger: false
    }

    selectRef = React.createRef()

    onShowEmail = (email) => {
        console.log(email);
        emailService.emailRead(email)
        emailService.sortEmails()
        this.setState({ isEmailShown: true, emailToShow: email })

    }
    onHideEmail = () => {
        this.setState({ isEmailShown: false, isHamburger: false })
    }

    onStarEmail = (email) => {
        emailService.emailStar(email)
        this.setState({})
    }
    onShowStarred = () => {
        this.onShowAll()
        this.setState({ isStarredShown: true, isHamburger: false })
    }
    onShowAll = () => {
        this.setState({ isHamburger: false, isStarredShown: false, isEmailShown: false, isDeletedShown: false, isDraftsShown: false, isSentShown: false })
    }
    onShowDeleted = () => {
        this.onShowAll()
        this.setState({ isDeletedShown: true, isHamburger: false })
    }
    onShowDrafts = () => {
        this.onShowAll()
        this.setState({ isDraftsShown: true, isHamburger: false })

    }
    onShowSent = () => {

        this.onShowAll()
        this.setState({ isSentShown: true, isHamburger: false })

    }

    onToggleSideFilter = () => {
        this.setState({ isHamburger: !this.state.isHamburger })

    }
    renderEmails = () => {

        return this.props.emails.map((email, idx) => {
            if (email.isStar && !email.isDeleted && this.state.isStarredShown) {
                return (
                    <div key={idx}>
                        <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                    </div>
                )

            }
            else if (email.isDeleted && this.state.isDeletedShown) {
                return (
                    <div key={idx}>
                        <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                    </div>
                )

            }
            else if (email.isDraft && this.state.isDraftsShown) {
                return (
                    <div key={idx}>
                        <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                    </div>
                )

            }
            else if (email.isSent && this.state.isSentShown) {
                return (
                    <div key={idx}>
                        <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                    </div>
                )

            }
            else if (!this.state.isStarredShown &&
                !this.state.isDeletedShown &&
                !this.state.isDraftsShown &&
                !this.state.isSentShown &&
                !email.isDeleted

            ) {
                return (
                    <div key={idx}>
                        <EmailPreview onStarEmail={this.onStarEmail} onShowEmail={this.onShowEmail} onRemoveEmail={this.props.onRemoveEmail} email={email} />
                    </div>
                )
            }

        })
    }
    setDefaultVal = () => {
        this.selectRef.current.value = 'Sort emails'
    }
    render() {
        return (
            <React.Fragment>
                <div className="hamburger">
                    <div onClick={this.onToggleSideFilter}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
                <section className="email-list">
                    <div className={`side-filter ${this.state.isHamburger ? 'show' : ''}`}>
                        <div className="btn-compose" onClick={this.props.onStartCompose}>
                            <i className="fas fa-paper-plane"></i>
                        </div>
                        <select ref={this.selectRef} defaultValue='Sort emails' onChange={(ev) => {
                            this.props.onSortBy(ev)
                            this.setDefaultVal()
                        }} name="" id="">
                            <option value="Sort emails" disabled >
                                Sort emails
                        </option>
                            <option value="date">
                                By date
                            </option>
                            <option value="read">
                                By read
                            </option>
                        </select>

                        <div onClick={this.onShowAll} className="filter-item">
                            <p> All mails</p>
                        </div>
                        <div onClick={this.onShowStarred} className="filter-item">
                            <p>Starred</p>
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

                    {!this.state.isEmailShown &&
                        <div className="email-previews-container">
                            {this.renderEmails()}
                        </div>}

                    {this.state.emailToShow && this.state.isEmailShown && <EmailBody onHideEmail={this.onHideEmail} onShowEmail={this.onShowEmail} email={this.state.emailToShow} />}
                </section>



            </React.Fragment>
        )
    }

}