import { NoteImg } from "../note-types/NoteImg.jsx";

export function ImageEditor(props) {


    const { id, info, style } = props.note

    return (
        <section className="note-editor">

            <div className="note" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
                <NoteImg note={props.note} />
            </div>
            <form className="editor-form">
                <input className="image-title" type="text" name="title" value={info.title} onChange={props.changeInput} />
                
                
                <div className="editor-btns">
                <label className="color-pallete" htmlFor="color"><i className="fas fa-palette"></i></label>
                <input hidden id="color" type="color" value={style.backgroundColor} onChange={props.changeColor} />
                <label className="image-upload" htmlFor='img-file'>
                <i className="far fa-image">
                        <input hidden id='img-file' type="file" onChange={() => props.uploadImage()} />
                    </i>
                </label>
                <button className="submit-button" type="button" onClick={() => props.updateNote()}><i className="far fa-plus-square"></i></button>
                </div>

            </form>
        </section>
    )
}