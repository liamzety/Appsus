export function NoteImg(props){

    console.log(props);
    return (
        <ul>
            <li>{props.note.info.title}</li>
    <li><img src={props.note.info.url}/></li>
        </ul>
    )
}