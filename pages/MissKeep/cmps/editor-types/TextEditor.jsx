import { NoteTxt } from "../note-types/NoteTxt.jsx";

export function TextEditor(props){

    console.log(props);
    const { id, info, style } = props.note

    return(
        <section className="note-editor">

        <h1>Edit Note</h1>

        <div className="note" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
            <NoteTxt note={props.note}/>
        </div>
        <form>
            <textarea type="text" name="txt" value={info.txt} onChange={props.changeInput} />
            <input type="color" value={style.backgroundColor} onChange={props.changeColor} />

            <button type="button" onClick={() => props.updateNote()}>Submit</button>

        </form>
    </section>
    )
}