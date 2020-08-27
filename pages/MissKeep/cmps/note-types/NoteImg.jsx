export function NoteImg(props){

    console.log(props.note.info.url);
    return (
        <ul>
            <li className="note-header">{props.note.info.title}</li>
            <li>
            <div className="note-img-container">
            <img src={props.note.info.url}/>
            </div>
            </li>
        </ul>
    )
}