
const { Link,Route } = ReactRouterDOM

import { Navbar } from "../../../cmps/Navbar.jsx";

import { missKeepService } from "../service/miss-keep-service.js";
import { NoteTxt } from "../cmps/note-types/NoteTxt.jsx";
import { NoteImg } from "../cmps/note-types/NoteImg.jsx";
import { NoteTodos } from "../cmps/note-types/NoteTodos.jsx";
import { NoteVideo } from "../cmps/note-types/NoteVideo.jsx"
import { AddNote } from "../cmps/AddNote.jsx";
import { NoteEdit } from "../cmps/NoteEdit.jsx";
import { NoteSearch } from "../cmps/NoteSearch.jsx";
import { UserMsg } from "../../../cmps/UserMsg.jsx";
import eventBusService from "../../../services/event-bus-service.js";

export class KeepApp extends React.Component {

    state = {
        notes: [],
        noteSelected: null,
        searchBy: ''
    }

    componentDidMount() {
        this.setState({ noteSelected: null })
        this.loadNotes()
    }

    loadNotes = () => {
        missKeepService.query()
            .then(notes => this.setState({ notes }))
    }

    markTodo = (todoId, noteId) => {



        missKeepService.markTodo(todoId, noteId)
            .then(todos => this.setState({ todos }))
    }

    removeTodo = (todoId, noteId) => {
        event.preventDefault()
        missKeepService.removeTodo(todoId, noteId)
            .then(todos => this.setState({ todos }))
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
                return <NoteTodos note={note} markTodo={this.markTodo} removeTodo={this.removeTodo} />
                break;
            case 'NoteVideo':
                return <NoteVideo note={note} />
                break;

            default:
                break;
        }
    }

    saveNotes = () => {
        this.loadNotes()
    }

    removeNote = (noteId) => {

        missKeepService.removeNote(noteId)
            .then(notes => this.setState({ notes }))
    }

    updateNote = () => {

        this.setState({ noteSelected: null })
    }

    searchByText = (searchBy) => {
        this.setState({ searchBy })
    }

    notesToShow = () => {


        const searchedNotes = this.state.notes.filter((note) => {
            if (note.info.txt) return note.info.txt.toLowerCase().includes(this.state.searchBy.toLowerCase())
            else if (note.info.title) return note.info.title.toLowerCase().includes(this.state.searchBy.toLowerCase())
            else if (note.info.label) return note.info.label.toLowerCase().includes(this.state.searchBy.toLowerCase())
        })


        return searchedNotes
    }

    pinNote = (noteId) => {
        missKeepService.pinNote(noteId)
            .then(notes => this.setState({ notes }))
    }

    sendNote = (noteId) => {
        missKeepService.sendNote(noteId)
            .then(note => eventBusService.emit('composeNote',
                {
                    subject: note.info.title || note.info.label || '', body: note.info.txt
                        || note.info.url || note.info.todos.map(todo => todo.txt) || ''
                }))
    }

    render() {
        const notes = this.notesToShow() || 'Loading...'



        return (
            <React.Fragment>
                <header>
                    <Route component={Navbar} />
                </header>
            <section className="miss-keep">

                <UserMsg />
                {<AddNote saveNotes={this.saveNotes} />}
                {<NoteSearch searchByText={this.searchByText} />}
                {<div className="notes">

                    {notes.map((note) =>

                        <ul key={note.id} className="note" style={{ backgroundColor: note.style ? note.style.backgroundColor : '' }}>

                            <li>{this.getNote(note)} </li>

                            <div className="note-btns" >
                                <button title="Edit" className="edit-note-btn" onClick={() => this.setState({ noteSelected: note })}><i className="fas fa-pen"></i></button>
                                <button title="Pin" className="pin-note-btn" onClick={() => this.pinNote(note.id)}><i className="fas fa-thumbtack"></i></button>
                                <Link to="/miss-email">
                                    <button title="Send" className="send-note-btn" onClick={() => this.sendNote(note.id)}><i className="fas fa-paper-plane"></i></button>
                                </Link>
                                <button title="Remove" className="remove-note-btn" onClick={() => this.removeNote(note.id)}><i className="fas fa-trash"></i></button>

                            </div>

                        </ul>
                    )}
                </div>}

                {this.state.noteSelected && <NoteEdit note={this.state.noteSelected} saveNotes={this.saveNotes} updateSelectedNote={this.updateNote} />}

            </section>
            </React.Fragment>
        )
    }
}