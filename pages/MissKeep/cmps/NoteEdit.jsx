import { missKeepService } from "./service/miss-keep-service.js";
import { NoteTxt } from "./cmps/NoteTxt.jsx";
import { NoteImg } from "./cmps/NoteImg.jsx";
import { NoteTodos } from "./cmps/NoteTodos.jsx";


export class NoteEdit extends React.Component {


    state = {
        type: this.props.note.type,
        isPinned: true,
        info: {
            txt: this.props.note.info.txt,
            label: this.props.note.info.label,
            todos: this.props.note.info.todos,
            url: this.props.note.info.url
        },
        id: this.props.note.id,
        style: {
            backgroundColor: this.props.note.style.backgroundColor || '#ffffff'
        },

    }

    componentDidMount() {
        console.log(this.props.note);
    }

    getNote(note) {

        switch (note.type) {
            case 'NoteText':
                return <NoteTxt note={note} />
                break;
            case 'NoteImg':
                return <NoteImg note={note} />
                break;
            case 'NoteTodos':
                return <NoteTodos note={note} />
                break;

            default:
                break;
        }
    }

    changeInput = (ev) => {
        console.log(this.state);
        this.setState({ info: { txt: ev.target.value } })
    }

    changeColor = (ev) => {
        this.setState({
            style: {
                backgroundColor: ev.target.value
            }
        })
    }

    updateNote = (note) => {

        this.props.updateSelectedNote()

        missKeepService.updateNote(note)
            .then(notes => this.props.saveNotes(notes))
    }

    backToNotes = () => {

        event.target.id === 'editor-bg' ? this.props.updateSelectedNote() : ''
    }


    render() {



        const { id, info, type, style } = this.state


        return (


            <div id="editor-bg" className="note-editor-bg" onClick={this.backToNotes}>


                <section className="note-editor">

                    <div className="note" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
                        {this.getNote(this.state)}
                    </div>
                    <h1>Edit Note</h1>
                    <form>
                        <textarea type="text" value={info.txt} onChange={this.changeInput} />
                        <input type="color" value={style.backgroundColor} onChange={this.changeColor} />

                        <button type="button" onClick={() => this.updateNote(this.state)}>Submit</button>

                    </form>
                </section>
            </div>

        )
    }
}