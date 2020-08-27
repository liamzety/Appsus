import { missKeepService } from "../service/miss-keep-service.js"

export class AddNote extends React.Component {

    state = {
        type: 'NoteText',
        info:{
            txt: '',
            img:''
        },
        isPinned: false,
        style:{
            backgroundColor: ''
        },
        placeholder:'Text Note',
        noteType:'text',
        name:'txt'
    }


    onChangeInput = (ev) => {
        this.setState({ info:{[ev.target.name]: ev.target.value} })
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
        console.log(note);

        this.setState({info:{txt:''}})
        
        missKeepService.addNote(note)
        .then(notes => this.props.saveNotes(notes))
        
    }

    uploadImage=(ev)=>{
        event.preventDefault()
        
        this.setState({type:'NoteImg', placeholder:'Image Note', noteType: 'file',name:'img'})
       
        if (ev.target.files && ev.target.files[0]) {
            let img = event.target.files[0];
            this.setState({info:{img: URL.createObjectURL(img) }})
            console.log(img);
        }
    }

    createTodo=()=>{
        event.preventDefault()
        this.setState({type:'NoteTodos', placeholder:'Todos Note'})

    }


    render() {

        const {placeholder,noteType,type,txt,name}= this.state
       
        return (
            <div className="note-adding-area">
            <h3>Add Quick Note</h3>
            <form className="add-note">
                
                <button className="add-note-btn" onClick={this.addNote}>++</button>
                <input placeholder={placeholder} name={name} type={noteType} onChange={this.onChangeInput} value={txt} />
                <div className="note-type-btns">

                <button onClick={this.uploadImage}>img</button>
                <button onClick={this.createTodo}>todo</button>

                </div>

            </form>
            </div>
        )
    }
}