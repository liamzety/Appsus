import { missKeepService } from "../service/miss-keep-service.js"
import { TextInput } from "./input-types/TextInput.jsx";
import { ImageInput } from "./input-types/ImageInput.jsx";
import { TodosInput } from "./input-types/TodosInput.jsx";

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
        
        this.setState({ info:{[event.target.name]: event.target.value,todos:[]} })
        
    }

    addNote = () => {
        event.preventDefault()
        const {placeholder,noteType,type,info,style,isPinned}= this.state
        const note = {
            type,
            info,
            isPinned,
            style
        }
       
        this.setState({type:'NoteText' ,info:{txt:'', url:''}})
        
        missKeepService.addNote(note)
        .then(notes => this.props.saveNotes(notes))
        
    }

    uploadImage=()=>{
        event.preventDefault()
   
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({info:{url: URL.createObjectURL(img) ,title:'Title'}})
            
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
            case "NoteImg":
                return<ImageInput uploadImage={this.uploadImage} />
                break;
            case "NoteTodos":
               return <TodosInput onChangeInput={this.onChangeInput}/>
                break;
        
            default:
                break;
        }
    }

    changeToImage=()=>{
        event.preventDefault()
        this.setState({type:'NoteImg'})
    }

    changeToTodos=()=>{
        event.preventDefault()
        this.setState({type:'NoteTodos'})
    }


    render() {

       
        return (
            <div className="note-adding-area">
            <h3>Add Quick Note</h3>
            <form className="add-note">
                
                <button className="add-note-btn" onClick={this.addNote}>++</button>
                {this.getInput()}
                <div className="note-type-btns">

                <button onClick={this.changeToImage}>img</button>
                <button onClick={this.changeToTodos}>todo</button>

                </div>

            </form>
            </div>
        )
    }
}