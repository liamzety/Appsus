
export class EmailCompose extends React.Component {
    state = {
        emailDetails: {
            subject: this.props.replayDetails.subject && `Re: ${this.props.replayDetails.subject}` || '',
            body: this.props.replayDetails.body && `Re: ${this.props.replayDetails.body}` || '',
            to: this.props.replayDetails.from && `Re: ${this.props.replayDetails.from}` || '',
            img: this.props.replayDetails.img
        }
    }



    onComposing = (ev) => {
        if (ev.target.files && ev.target.files[0]) {
            let img = ev.target.files[0];
            this.setState({ emailDetails: { ...this.state.emailDetails, img: URL.createObjectURL(img) } });
        } else {
            this.setState({ emailDetails: { ...this.state.emailDetails, [ev.target.name]: ev.target.value } });
        }

    };



    render() {
        if (!this.props.replayDetails) return
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
                }} action="">
                    <div className="form-inputs-container">
                        <input value={this.state.emailDetails.from} onChange={this.onComposing} placeholder='To:' name='to' type="text" />
                        <input value={this.state.emailDetails.subject} placeholder='Subject:' name='subject' onChange={this.onComposing} type="text" />
                        <textarea value={this.state.emailDetails.body} name='body' onChange={this.onComposing} type="text" />
                    </div>
                    <div className="form-btn-container">
                        <input name='img' onChange={this.onComposing} type="file" accept="image/*" />
                        <button className="btn-send-email">Send</button>
                    </div>
                </form>
            </section>
        )
    }

}