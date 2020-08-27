import { NoteImg } from "../note-types/NoteImg.jsx";

export function ImageEditor(props){

    
    const { id, info, style } = props.note

    return(
        <section className="note-editor">

        <h1>Edit Note</h1>

        <div className="note" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
            <NoteImg note={props.note}/>
        </div>
        <form>
            <input type="text" name="title" value={info.title} onChange={props.changeInput} />
            <input type="color" value={style.backgroundColor} onChange={props.changeColor} />
            <input type="file" onChange={()=>props.uploadImage()}/>

            <button type="button" onClick={() => props.updateNote()}>Submit</button>

        </form>
    </section>
    )
}