const { Link, Route, Switch } = ReactRouterDOM

import { missKeepService } from "./service/miss-keep-service.js";
import { NoteTxt } from "./cmps/NoteTxt.jsx";
import { NoteImg } from "./cmps/NoteImg.jsx";
import { NoteTodos } from "./cmps/NoteTodos.jsx";
import { AddNote } from "./cmps/AddNote.jsx";
import { NoteEdit } from "./cmps/NoteEdit.jsx";

export class MissKeep extends React.Component {

    state = {
        notes: [],
        noteSelected:null
    }

    componentDidMount() {
    this.setState({noteSelected:null})
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
                console.log(note);
                return <NoteTodos note={note} />
                break;

            default:
                break;
        }
    }

    saveNotes=()=>{
        this.loadNotes()
    }

    removeNote=(noteId)=>{
        
        missKeepService.removeNote(noteId)
        .then(notes => this.setState({notes}))
    }

    updateNote=()=>{
        console.log('hello');
        this.setState({noteSelected:null})
    }

    render() {
        return (
            <section className="miss-keep">
                <h1>MISS KEEPS</h1>
                {<AddNote saveNotes={this.saveNotes}/>}
                {<div className="notes">
                
                    {this.state.notes.map((note) =>
                    
                        <ul key={note.id} className="note" style={{backgroundColor: note.style ? note.style.backgroundColor : ''}}>
                            <button className="remove-note-btn" onClick={()=>this.removeNote(note.id)}>X</button>
                            
                            <button className="edit-note-btn" onClick={()=> this.setState({noteSelected:note})}>🖊</button>
                            
                            <li>{this.getNote(note)} </li>
                        </ul>
                    )}
                </div>}
               
               {this.state.noteSelected && <NoteEdit note={this.state.noteSelected} saveNotes={this.saveNotes} updateSelectedNote={this.updateNote}/>}
               
            </section>
        )
    }
}