import { utilsService } from "../../../../services/utils.js"

export function NoteTodos(props) {


   
    return (
        <ul className="todo-note">
            <li>{props.note.info.label}</li>
           
                <ul>{props.note.info.todos.map(todo =>

                    <li key={utilsService.getRandId()} className="todo">
                        <div className={todo.doneAt ? "todo-text mark-todo" : "todo-text"} onClick={()=>props.markTodo(todo.id, props.note.id)}>
                        {todo.txt}
                        </div>
                        <button className="remove-todo" onClick={()=>props.removeTodo(todo.id,props.note.id)}>X</button></li>)}
                </ul>
            
        </ul>
    )
}