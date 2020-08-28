import { NoteTxt } from "../note-types/NoteTxt.jsx";

export function TextEditor(props){

    
    const { id, info, style } = props.note

    return(
        <section className="note-editor">

        <div className="note edit-mode" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
            <NoteTxt note={props.note}/>
        </div>
        <form className="editor-form">
            <textarea type="text" name="txt" value={info.txt} onChange={props.changeInput} rows="5" cols="50"/>
           
            <div className="editor-btns">
            <label className="color-pallete" htmlFor="color"><i className="fas fa-palette"></i></label>
            <input hidden id="color" type="color" value={style.backgroundColor} onChange={props.changeColor} />

            <button className="submit-button" type="button" onClick={() => props.updateNote()}><i className="far fa-plus-square"></i></button>
            </div>
        </form>
    </section>
    )
}