
export class EmailBody extends React.Component {

    render() {

        return (
            <section className="email-body">
                <button onClick={() => this.props.onHideEmail(this.props.email)}>Back</button>
                <h1>{this.props.email.subject}</h1>
                <p>{this.props.email.body}</p>
            </section>
        )
    }

}