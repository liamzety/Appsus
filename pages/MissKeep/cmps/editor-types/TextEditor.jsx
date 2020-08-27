import { NoteTxt } from "../note-types/NoteTxt.jsx";

export function TextEditor(props){

    
    const { id, info, style } = props.note

    return(
        <section className="note-editor">

        <h1>Edit Note</h1>

        <div className="note" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
            <NoteTxt note={props.note}/>
        </div>
        <form className="editor-form">
            <textarea type="text" name="txt" value={info.txt} onChange={props.changeInput} rows="5" cols="50"/>
            <label class="color-pallete" htmlFor="color"><i class="fas fa-palette"></i></label>
            <input hidden id="color" type="color" value={style.backgroundColor} onChange={props.changeColor} />

            <button className="submit-button" type="button" onClick={() => props.updateNote()}><i class="far fa-plus-square"></i></button>

        </form>
    </section>
    )
}