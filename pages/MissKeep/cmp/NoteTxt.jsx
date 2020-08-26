export function NoteTxt(props){

    console.log(props);
    return (
        <ul>
            <li>{props.note.info.txt}</li>
        </ul>
    )
}