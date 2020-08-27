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
            title:''
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
        
        this.setState({ info:{[event.target.name]: event.target.value} })
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
       console.log(event);
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({info:{url: URL.createObjectURL(img) ,title:'Title'}})
            console.log(img);
        }
    }

    createTodo=()=>{
        event.preventDefault()
        this.setState({type:'NoteTodos', placeholder:'Todos Note'})

    }

    getInput=()=>{
        switch (this.state.type) {
            case "NoteText":
               return <TextInput onChangeInput={this.onChangeInput} text={this.state.info.txt}/>
                break;
            case "NoteImg":
                return<ImageInput uploadImage={this.uploadImage} url={this.state.info.url} />
                break;
            case "NoteTodos":
               return <TodosInput />
                break;
        
            default:
                break;
        }
    }

    changeToImage=()=>{
        event.preventDefault()
        this.setState({type:'NoteImg'})
    }


    render() {

        const {placeholder,noteType,info,name}= this.state
       
        return (
            <div className="note-adding-area">
            <h3>Add Quick Note</h3>
            <form className="add-note">
                
                <button className="add-note-btn" onClick={this.addNote}>++</button>
                {this.getInput()}
                {/* <input placeholder={placeholder} name={name} type="text" onChange={this.onChangeInput} value={info.txt} /> */}
                <div className="note-type-btns">

                <button onClick={this.changeToImage}>img</button>
                <button onClick={this.getInput}>todo</button>

                </div>

            </form>
            </div>
        )
    }
}