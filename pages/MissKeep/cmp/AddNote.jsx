import { missKeepService } from "../service/miss-keep-service.js"

export class AddNote extends React.Component {

    state = {
        type: 'NoteText',
        txt: null,
        isPinned: false
    }


    onChangeInput = (ev) => {
        this.setState({ txt: ev.target.value })
    }

    addNote = () => {

        const note = {
            type: this.state.type,
            info: {
                txt: this.state.txt
            },
            isPinned: this.state.isPinned
        }

        missKeepService.addNote(note)
            .then(notes => this.props.saveNotes(notes))
    }

    render() {
        console.log('update');
        return (
            <form className="add-note">
                <input type="text" onChange={this.onChangeInput} />
                <button className="add-note-btn" onClick={this.addNote}>Add</button>
            </form>
        )
    }
}