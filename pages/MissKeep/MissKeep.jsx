const { Link, Route, Switch } = ReactRouterDOM

import { missKeepService } from "./service/miss-keep-service.js";
import { NoteTxt } from "./cmp/NoteTxt.jsx";
import { NoteImg } from "./cmp/NoteImg.jsx";
import { NoteTodos } from "./cmp/NoteTodos.jsx";
import { AddNote } from "./cmp/AddNote.jsx";

export class MissKeep extends React.Component {

    state = {
        notes: []
    }

    componentDidMount() {

        this.loadNotes()
    }

    loadNotes = () => {
        missKeepService.query()
            .then(notes => this.setState({ notes }))
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

    saveNotes=()=>{
        this.loadNotes()
    }


    render() {
        return (
            <section className="miss-keep">
                <h1>MISS KEEPS</h1>
                <div className="notes">
                    {this.state.notes.map((note, idx) =>
                        <ul key={idx}>
                            <li>{this.getNote(note)} </li>
                        </ul>
                    )}
                </div>
                <AddNote saveNotes={this.saveNotes}/>
               
            </section>
        )
    }
}