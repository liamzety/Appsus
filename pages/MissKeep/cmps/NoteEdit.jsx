import { missKeepService } from "../service/miss-keep-service.js";
import { TextEditor } from "./editor-types/TextEditor.jsx";
import { ImageEditor } from "./editor-types/ImageEditor.jsx";
import { TodosEditor } from "./editor-types/TodosEditor.jsx";
import { VideoEditor } from "./editor-types/VideoEditor.jsx";


export class NoteEdit extends React.Component {


    state = {
        type: this.props.note.type,
        isPinned: true,
        info: {
            txt: this.props.note.info.txt,
            label: this.props.note.info.label,
            todos: this.props.note.info.todos,
            url: this.props.note.info.url,
            title:this.props.note.info.title
        },
        id: this.props.note.id,
        style: {
            backgroundColor: this.props.note.style.backgroundColor || '#ffffff'
        }

    }

    changeInput = (ev) => {

        this.setState({info: {...this.state.info, [ev.target.name]: ev.target.value } })
    }

    changeColor = (ev) => {
        this.setState({
            style: {
                backgroundColor: ev.target.value
            }
        })
    }

    updateNote = () => {
        
        this.props.updateSelectedNote()

        missKeepService.updateNote(this.state)
            .then(notes => this.props.saveNotes(notes))
    }

    backToNotes = () => {

        event.target.id === 'editor-bg' ? this.props.updateSelectedNote() : ''
    }

    uploadImage=()=>{
        event.preventDefault()
   
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({info:{url: URL.createObjectURL(img) ,title:'Title'}})
            
        }
    }

    getEditor= ()=>{
        switch (this.state.type) {
            case 'NoteText':
                return <TextEditor note={this.state} changeInput={this.changeInput} changeColor={this.changeColor} updateNote={this.updateNote}/>
                break;
            case 'NoteImg':
                return <ImageEditor note={this.state} uploadImage={this.uploadImage} changeInput={this.changeInput} changeColor={this.changeColor} updateNote={this.updateNote}/>
                break;
            case 'NoteTodos':
                return <TodosEditor note={this.state} changeInput={this.changeInput} changeColor={this.changeColor} updateNote={this.updateNote} />
                break;
            case 'NoteVideo':
                return <VideoEditor note={this.state} changeInput={this.changeInput} changeColor={this.changeColor} updateNote={this.updateNote} />
                break;

            default:
                break;
        }
    }


    render() {


        return (


            <div id="editor-bg" className="note-editor-bg" onClick={this.backToNotes}>

                    {this.getEditor()}
            </div>

        )
    }
}