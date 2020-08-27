import { missKeepService } from "../../service/miss-keep-service.js"
import { NoteTodos } from "../note-types/NoteTodos.jsx";

export class TodosEditor extends React.Component {

    state = {
        todos: this.props.note.info.todos,
        newTodo: '',
    }

    onInputChange = (ev) => {
        
        this.setState({ newTodo: ev.target.value })
    }


    markTodo = (todoId, noteId) => {
        console.log(event.target);
        missKeepService.markTodo(todoId, noteId)
            .then(todos => this.setState({ todos }))
    }

    addTodo = () => {
        event.preventDefault()
        missKeepService.updateTodos(this.state.todos, this.state.newTodo)
            .then(todos => this.setState({ todos , newTodo:''}))



    }

    removeTodo = (todoId, noteId) => {
        event.preventDefault()
        missKeepService.removeTodo(todoId, noteId)
            .then(todos=> this.setState({ todos }))
    }

    render() {
        const { id, info, style } = this.props.note

        return (
            <section className="note-editor">

                <h1>Edit Note</h1>

                <div className="note" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
                    <NoteTodos onInputChange={this.onInputChange} note={this.props.note} markTodo={this.markTodo} removeTodo={this.removeTodo} />
                </div>
                <form>
                    Label:<input type="text" name="label" value={info.label} onChange={this.props.changeInput} />
            Todos: <input type="text" value={this.state.newTodo} onChange={this.onInputChange} /><button onClick={() => this.addTodo()}>+</button>
                    <input type="color" value={style.backgroundColor} onChange={this.props.changeColor} />

                    <button type="button" onClick={() => this.props.updateNote()}>Submit</button>

                </form>
            </section>
        )
    }
}