import { NoteImg } from "../note-types/NoteImg.jsx";

export function ImageEditor(props) {


    const { id, info, style } = props.note

    return (
        <section className="note-editor">

            <h1>Edit Note</h1>

            <div className="note" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
                <NoteImg note={props.note} />
            </div>
            <form className="editor-form">
                <input type="text" name="title" value={info.title} onChange={props.changeInput} />
                <label class="color-pallete" htmlFor="color"><i class="fas fa-palette"></i></label>
                <input hidden id="color" type="color" value={style.backgroundColor} onChange={props.changeColor} />
                <label htmlFor='img-file'>
                    <i class="fas fa-file-upload">
                        <input hidden id='img-file' type="file" onChange={() => props.uploadImage()} />
                    </i>
                </label>


                <button className="submit-button" type="button" onClick={() => props.updateNote()}><i class="far fa-plus-square"></i></button>

            </form>
        </section>
    )
}