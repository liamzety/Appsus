import { missKeepService } from "../service/miss-keep-service.js"

export class AddNote extends React.Component {

    state = {
        type: 'NoteText',
        txt: null,
        isPinned: false,
        style:{
            backgroundColor: null
        }
    }


    onChangeInput = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    addNote = () => {

        const note = {
            type: this.state.type,
            info: {
                txt: this.state.txt
            },
            isPinned: this.state.isPinned,
            style: this.state.style
        }

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
            <form className="add-note">
                <textarea name="txt" type="text" onChange={this.onChangeInput} />
                <input type="color" onChange={this.changeColor} />
                <button className="add-note-btn" onClick={this.addNote}>Add</button>
            </form>
        )
    }
}