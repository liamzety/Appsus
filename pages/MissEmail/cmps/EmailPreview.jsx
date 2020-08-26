import { utilsService } from '../../../services/utils.js'
import { emailService } from '../service/miss-email-service.js'
import { EmailBody } from '../cmps/EmailBody.jsx'

export class EmailPreview extends React.Component {

    state = {
        showLongTxt: false,

    }
    onShowLongText = () => {
        this.setState({ showLongTxt: !this.state.showLongTxt })
        emailService.emailRead(this.props.email)
    }



    render() {
        const { email } = this.props
        const sentAt = utilsService.getFormattedDate(email.sentAt)
        return (
            <React.Fragment>
                {!this.state.showEmail &&
                    <section onClick={this.onShowLongText} className="email-preview-container mb-25">

                        <div onClick={(ev) => {
                            ev.stopPropagation()
                            this.props.onRemoveEmail(email.id)

                        }}>
                            <i className="fas fa-trash"></i>
                        </div>
                        <div onClick={(ev) => {
                            ev.stopPropagation()
                            this.props.onShowEmail(email)
                        }}>
                            <i className="fas fa-arrow">show</i>
                        </div>
                        <h2>{email.from}</h2>
                        <h2>Sent: {sentAt}</h2>
                        <h1 style={{ fontWeight: email.isRead ? 400 : 700 }}>{email.subject}</h1>
                        <div className={this.state.showLongTxt ? 'txt-body-container' : 'txt-body-container hide-long-txt'}>
                            <p >{email.body}</p>
                        </div>
                    </section>
                }


            </React.Fragment>
        )
    }

}