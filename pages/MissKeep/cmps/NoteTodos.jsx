import {utilsService} from "../../../services/utils.js"

export function NoteTodos(props) {

    
    return (
        <ul>
            <li>{props.note.info.label}</li>
            <li> <ul>{props.note.info.todos.map(todo => <li key={utilsService.getRandId()}>{todo.txt}</li>)}</ul></li>
        </ul>
    )
}