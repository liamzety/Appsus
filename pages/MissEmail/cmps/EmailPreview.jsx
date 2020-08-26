import { utilsService } from '../../../services/utils.js'
export class EmailPreview extends React.Component {



    render() {
        const { email } = this.props
        const sentAt = utilsService.getFormattedDate(email.sentAt)
        return (
            <section className="email-preview-container mb-25">
                <div onClick={() => {
                    this.props.onRemoveEmail(email.id)

                }}>X</div>
                <h2>Sent: {sentAt}</h2>
                <h1 style={{ fontWeight: email.isRead ? 400 : 700 }}>{email.subject}</h1>
                <p>{email.body}</p>

            </section>
        )
    }

}