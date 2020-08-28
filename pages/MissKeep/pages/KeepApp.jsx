
import { missKeepService } from "../service/miss-keep-service.js";
import { NoteTxt } from "../cmps/note-types/NoteTxt.jsx";
import { NoteImg } from "../cmps/note-types/NoteImg.jsx";
import { NoteTodos } from "../cmps/note-types/NoteTodos.jsx";
import {NoteVideo} from "../cmps/note-types/NoteVideo.jsx"
import { AddNote } from "../cmps/AddNote.jsx";
import { NoteEdit } from "../cmps/NoteEdit.jsx";
import { NoteSearch } from "../cmps/NoteSearch.jsx";
import { UserMsg } from "../../../cmps/UserMsg.jsx";

export class KeepApp extends React.Component {

    state = {
        notes: [],
        noteSelected:null,
        searchBy:''
    }

    componentDidMount() {
    this.setState({noteSelected:null})
        this.loadNotes()
    }

    loadNotes = () => {
        missKeepService.query()
            .then(notes => this.setState({ notes }))
    }

    markTodo = (todoId,noteId) => {
       
        console.log(this.state.notes);
        
        missKeepService.markTodo(todoId, noteId)
        .then(todos=> this.setState({todos}))
    }

    removeTodo = (todoId, noteId) => {
        event.preventDefault()
        missKeepService.removeTodo(todoId, noteId)
            .then(todos=> this.setState({ todos }))
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
                return <NoteTodos note={note} markTodo={this.markTodo} removeTodo={this.removeTodo}/>
                break;
            case 'NoteVideo':             
                return <NoteVideo note={note} />
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
        
        this.setState({noteSelected:null})
    }

    searchByText=(searchBy)=>{
        this.setState({searchBy})
    }

    notesToShow=()=>{

        console.log(this.state.notes);
        const searchedNotes= this.state.notes.filter((note)=>{
           
           if (note.info.txt) return note.info.txt.toLowerCase().includes(this.state.searchBy)
           else if(note.info.title) return note.info.title.toLowerCase().includes(this.state.searchBy)
           else if(note.info.label) return note.info.label.toLowerCase().includes(this.state.searchBy)   
        })
        
       console.log(searchedNotes);
        return searchedNotes
    }

    pinNote=(noteId)=>{
        missKeepService.pinNote(noteId)
        .then(notes=> this.setState({notes}))
    }

    render() {
        const notes= this.notesToShow() || 'Loading...'
        
        
       
        return (
            <section className="miss-keep">
                {<AddNote saveNotes={this.saveNotes}/>}
                {<NoteSearch searchByText={this.searchByText}/>}
                {<div className="notes">
                
                    {notes.map((note) =>
                    
                        <ul key={note.id} className="note" style={{backgroundColor: note.style ? note.style.backgroundColor : ''}}>
                            
                            <li>{this.getNote(note)} </li>
                          
                            <div className="note-btns" >
                            <button className="edit-note-btn" onClick={()=> this.setState({noteSelected:note})}><i className="fas fa-pen"></i></button>
                            <button className="pin-note-btn" onClick={()=>this.pinNote(note.id)}><i className="fas fa-thumbtack"></i></button>
                            <button className="remove-note-btn" onClick={()=>this.removeNote(note.id)}><i className="fas fa-trash"></i></button>
                                
                            </div>
                            
                        </ul>
                    )}
                </div>}
               
               {this.state.noteSelected && <NoteEdit note={this.state.noteSelected} saveNotes={this.saveNotes} updateSelectedNote={this.updateNote}/>}
               
            </section>
        )
    }
}