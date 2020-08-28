import { missKeepService } from "../service/miss-keep-service.js"
import { TextInput } from "./input-types/TextInput.jsx";
import { TodosInput } from "./input-types/TodosInput.jsx";
import { VideoInput } from "./input-types/VideoInput.jsx";

export class AddNote extends React.Component {

    state = {
        type: 'NoteText',
        info:{
            txt: '',
            url:'',
            title:'',
            todos:[],
            label:''
        },
        isPinned: false,
        style:{
            backgroundColor: ''
        },
        placeholder:'Text Note',
        noteType:'text',
        name:'txt'
    }


    onChangeInput = () => {
        
        this.setState({ info:{[event.target.name]: event.target.value,todos:[],title:'Title'} })
        
    }

    addNote = () => {
        event.preventDefault()
        
        const {type,info,style,isPinned}= this.state
        
        const note = {
            type,
            info,
            isPinned,
            style:{
                backgroundColor:'#ffffff'
            }
        }

        
       if (!note.info.title && !note.info.label)return 
        else if(note.type=='NoteVideo' && !note.info.url && note.info.title)return
        missKeepService.addNote(note)
        .then(notes => this.props.saveNotes(notes))
        
        this.setState({type:'NoteText' ,info:{txt:'', url:''}})
    }

    uploadImage=()=>{
        event.preventDefault()
        
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            
            const imgNote={
            type:'NoteImg',
            info:{
                url:URL.createObjectURL(img),
                title:'Title'
            },
            isPinned:false,
            style:{
                backgroundColor:'#ffffff'
            }
            }
            console.log(imgNote.info.url);
           
            missKeepService.addNote(imgNote)
            .then(notes => this.props.saveNotes(notes))
            this.setState({type:'NoteText' ,info:{txt:'', url:''}})
        }
  
    }

    createTodo=()=>{
        event.preventDefault()
        this.setState({type:'NoteTodos', placeholder:'Todos Note' ,info:{todos:[]}})
       
    }

    getInput=()=>{
        switch (this.state.type) {
            case "NoteText":
               return <TextInput onChangeInput={this.onChangeInput} text={this.state.info.txt}/>
                break;
               
            case "NoteTodos":
               return <TodosInput onChangeInput={this.onChangeInput}/>
                break;

            case "NoteVideo":
               return <VideoInput onChangeInput={this.onChangeInput}/>
                break;
        
            default:
                break;
        }
    }


    changeToTodos=()=>{
        event.preventDefault()
        this.setState({type:'NoteTodos'})
    }

    changeToText=()=>{
        event.preventDefault()
        this.setState({type:'NoteText'})
    }

    changeToVideo=()=>{
        event.preventDefault()
        this.setState({type:'NoteVideo' ,info:{title:'Video'}})
    }


    render() {

       
        return (
            <div className="note-adding-area">
            
            <form className="add-note">
                
                <button className="add-note-btn" onClick={this.addNote}><i className="fas fa-plus"></i></button>
                {this.getInput()}
                <div className="note-type-btns">

                <button onClick={this.changeToText}><i className="fas fa-paragraph"></i></button>
                <label htmlFor="image-upload"><i className="far fa-image"></i></label>
                <input id="image-upload" hidden placeholder="Image File" name="url" type="file" onChange={this.uploadImage}  />
                <button onClick={this.changeToTodos}><i className="fas fa-list"></i></button>
                <button onClick={this.changeToVideo}><i className="fab fa-youtube"></i></button>

                </div>

            </form>
            </div>
        )
    }
}