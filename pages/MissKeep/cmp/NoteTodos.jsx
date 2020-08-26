export function NoteTodos(props) {

    console.log(props);
    return (
        <ul>
            <li>{props.note.info.label}</li>
            <li> {props.note.info.todos.map(todo => <ul><li>{todo.txt}</li></ul>)}</li>
        </ul>
    )
}