
export class EmailCompose extends React.Component {
    state = {
        emailDetails: {
            subject: '',
            body: '',
            to: ''
        }
    }

    onComposing = (ev) => {
        this.setState({ emailDetails: { ...this.state.emailDetails, [ev.target.name]: ev.target.value } });
    };



    render() {

        return (
            <section className="email-compose">
                <div className="form-header" onClick={() => {
                    this.props.onEndCompose(this.state.emailDetails)
                }}>
                    <i className="fas fa-times close-modal"></i>
                </div>
                <form onSubmit={(ev) => {
                    ev.preventDefault();
                    this.props.onAddEmail(this.state.emailDetails)
                    this.props.onEndCompose()
                }} action="">
                    <div className="form-inputs-container">
                        <input placeholder='To:' name='to' type="text" />
                        <input placeholder='Subject:' name='subject' onChange={this.onComposing} type="text" />
                        <textarea name='body' onChange={this.onComposing} type="text" />
                    </div>
                    <div className="form-btn-container">
                        <button className="btn-send-email">Send</button>
                    </div>
                </form>
            </section>
        )
    }

}