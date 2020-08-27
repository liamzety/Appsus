
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
        console.log('', this.props.replayDetails)
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
                        <input value={this.props.replayDetails.from && `${this.props.replayDetails.from}`} placeholder='To:' name='to' type="text" />
                        <input value={this.props.replayDetails.subject && `Re: ${this.props.replayDetails.subject}`} placeholder='Subject:' name='subject' onChange={this.onComposing} type="text" />
                        <textarea value={this.props.replayDetails.body && `Re: ${this.props.replayDetails.body}`} name='body' onChange={this.onComposing} type="text" />
                    </div>
                    <div className="form-btn-container">
                        <button className="btn-send-email">Send</button>
                    </div>
                </form>
            </section>
        )
    }

}