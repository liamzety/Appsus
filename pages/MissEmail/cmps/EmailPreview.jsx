import { utilsService } from '../../../services/utils.js'
import { emailService } from '../service/miss-email-service.js'

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
                    <section onClick={this.onShowLongText} className="email-preview-container mb-10">

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
                        <div className={this.state.showLongTxt ? 'txt-body-container' : 'txt-body-container hide-long-txt'}>
                            <h1 style={{ fontWeight: email.isRead ? 400 : 700 }}>{email.subject}</h1>
                            <p >{email.body}</p>
                        </div>
                        <p>{sentAt}</p>
                    </section>
                }


            </React.Fragment>
        )
    }

}