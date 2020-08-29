import { NoteVideo } from "../note-types/NoteVideo.jsx";

export function VideoEditor(props) {


    const { id, info, style } = props.note

    return (
        <section className="note-editor">

            <div className="note edit-mode" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
                <NoteVideo note={props.note} />
            </div>
            <form className="editor-form">
                <input className="image-title" type="text" name="title" value={info.title} onChange={props.changeInput} />
                
                
                <div className="editor-btns">
                <label className="color-pallete" htmlFor="color"><i className="fas fa-palette"></i></label>
                <input hidden id="color" type="color" value={style.backgroundColor} onChange={props.changeColor} />
   
                <button className="submit-button" type="button" onClick={() => props.updateNote()}>Submit</button>
                </div>

            </form>
        </section>
    )
}