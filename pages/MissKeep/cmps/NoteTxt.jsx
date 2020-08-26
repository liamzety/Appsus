export function NoteTxt(props){

    
    return (
        <ul >
            <h4>{props.note.info.title}</h4>
            <li>{props.note.info.txt}</li>
        </ul>
    )
}