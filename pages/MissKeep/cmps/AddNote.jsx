import { missKeepService } from "../service/miss-keep-service.js"

export class AddNote extends React.Component {

    state = {
        type: 'NoteText',
        txt: '',
        isPinned: false,
        style:{
            backgroundColor: ''
        }
    }


    onChangeInput = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    addNote = () => {
        event.preventDefault()
        const note = {
            type: this.state.type,
            info: {
                txt: this.state.txt
            },
            isPinned: this.state.isPinned,
            style: this.state.style
        }

        this.setState({txt:''})

        console.log(this.state.txt);
        
        missKeepService.addNote(note)
        .then(notes => this.props.saveNotes(notes))

    }

    changeColor = (ev) => {
        this.setState({ style:{
            backgroundColor: ev.target.value
        }})
    }

    render() {
       
        return (
            <div className="note-adding-area">
            <h3>Add Quick Note</h3>
            <form className="add-note">
                
                <textarea name="txt" type="text" onChange={this.onChangeInput} value={this.state.txt} />
                <input type="color" onChange={this.changeColor} />
                <button className="add-note-btn" onClick={this.addNote}>Add</button>
            </form>
            </div>
        )
    }
}