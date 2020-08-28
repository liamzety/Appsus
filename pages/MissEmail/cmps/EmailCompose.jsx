
export class EmailCompose extends React.Component {
    state = {
        emailDetails: {
            subject: '',
            body: '',
            to: '',
            img: ''
        }
    }

    componentDidMount() {

        if (this.props.noteDetails) {
            const { subject, body } = this.props.noteDetails
            this.setState({ emailDetails: { ...this.state.emailDetails, subject: subject || '', body: body || '' } });
        }
        else if (this.props.replyDetails) {
            console.log('replay', this.props.replyDetails)
            const { subject, body, to } = this.props.replyDetails
            this.setState({ emailDetails: { ...this.state.emailDetails, subject: `Re:${subject}` || '', body: `Re: ${body} ` || '', to: `Re: ${to}` || '' } });
        } else {
            console.log('imhere',)
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
        console.log('details', this.props.replyDetails)
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
                        <label htmlFor="img">
                            <i className="far fa-image btn-image-upload">
                                <input id='img' name='img' onChange={this.onComposing} type="file" accept="image/*" hidden />
                            </i>
                        </label>
                        <button className="btn-send-email">Send</button>
                    </div>
                </form>
            </section>
        )
    }

}