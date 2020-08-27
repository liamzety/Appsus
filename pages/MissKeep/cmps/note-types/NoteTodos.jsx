import { utilsService } from "../../../../services/utils.js"

export function NoteTodos(props) {


   
    return (
        <ul>
            <li>{props.note.info.label}</li>
            <li>
                <ul>{props.note.info.todos.map(todo =>

                    <li key={utilsService.getRandId()}>
                        <input type="checkbox" onChange={()=>props.markTodo(todo.id, props.note.id)} />
                        <div className="todo-text">{todo.txt}</div>
                        <button onClick={()=>props.removeTodo(todo.id,props.note.id)}>X</button></li>)}
                </ul>
            </li>
        </ul>
    )
}