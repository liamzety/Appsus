import { NoteTodos } from "../note-types/NoteTodos.jsx";

export function TodosEditor(props){

    console.log(props);
    const { id, info, style } = props.note

    return(
        <section className="note-editor">

        <h1>Edit Note</h1>

        <div className="note" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
            <NoteTodos note={props.note}/>
        </div>
        <form>
            <input type="text" name="label" value={info.label} onChange={props.changeInput} />
            <input type="color" value={style.backgroundColor} onChange={props.changeColor} />

            <button type="button" onClick={() => props.updateNote()}>Submit</button>

        </form>
    </section>
    )
}