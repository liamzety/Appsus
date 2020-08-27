import { utilsService } from '../../../services/utils.js'

export class EmailPreview extends React.Component {

    render() {
        const { email } = this.props
        const sentAt = utilsService.getFormattedDate(email.sentAt)
        return (
            <React.Fragment>
                <section style={{ backgroundColor: email.isRead ? '#4c4c4cd8' : '#2a2a2ad8' }} onClick={() => {
                    this.props.onShowEmail(email)
                }} className="email-preview-container mb-10">

                    <div className="txt-body-start-container">
                        <div className='email-preview-icon' onClick={(ev) => {
                            ev.stopPropagation()
                            this.props.onRemoveEmail(email.id)
                        }}>
                            <i className="fas fa-trash"></i>
                        </div>
                        <div className='email-preview-icon' onClick={(ev) => {
                            ev.stopPropagation()
                            this.props.onStarEmail(email)

                        }}>
                            {email.isStar && <i style={{ color: 'yellow' }} className="fas fa-star"></i>}
                            {!email.isStar && <i className="far fa-star"></i>}


                        </div>
                        <p>{email.from}</p>
                    </div>
                    <div className="txt-body-mid-container hide-long-txt">
                        <h2 style={{ fontWeight: email.isRead ? 400 : 700 }}>{email.subject}</h2>
                        <p >{email.body}</p>
                    </div>


                    <div className='txt-body-end-container '>
                        <p>{sentAt}</p>
                    </div>

                </section>

            </React.Fragment>
        )
    }

}