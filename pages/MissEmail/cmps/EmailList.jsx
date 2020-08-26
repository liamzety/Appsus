import { EmailPreview } from './EmailPreview.jsx'


export class EmailList extends React.Component {

    render() {

        return (


            <section className="email-list">

                {this.props.emails.map((email, idx) => {
                    return (
                        <div key={idx}>
                            <EmailPreview onRemoveEmail={this.props.onRemoveEmail} email={email} />
                        </div>
                    )
                }) || <h1>no emails</h1>}

            </section>
        )
    }

}