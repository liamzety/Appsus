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
        missKeepService.markTodo(todoId, noteId)
            .then(todos => this.setState({ todos }))
    }

    addTodo = () => {
        event.preventDefault()
        if(!this.state.newTodo)return
        missKeepService.updateTodos(this.state.todos, this.state.newTodo)
            .then(todos => this.setState({ todos, newTodo: '' }))

    }

    removeTodo = (todoId, noteId) => {
        event.preventDefault()
        missKeepService.removeTodo(todoId, noteId)
            .then(todos => this.setState({ todos }))
    }

    render() {
        const { id, info, style } = this.props.note

        return (
            <section className="note-editor">

                <div className="note edit-mode" style={{ backgroundColor: style ? style.backgroundColor : '' }}>
                    <NoteTodos onInputChange={this.onInputChange} note={this.props.note} markTodo={this.markTodo} removeTodo={this.removeTodo} />
                </div>
                <form className="editor-form">
                    Label:
                    <input className="add-todo-label" placeholder="Todo Title" type="text" name="label" value={info.label} onChange={this.props.changeInput} />
                    Todos:
                    <div className="add-todo-input">
                        <input placeholder="Todo Text" type="text" value={this.state.newTodo} onChange={this.onInputChange} />
                        <button onClick={() => this.addTodo()}><i className="fas fa-plus"></i></button>

                    </div>
                    <div className="editor-btns">
                        
                    <label className="color-pallete" htmlFor="color"><i className="fas fa-palette"></i></label>
            <input hidden id="color" type="color" value={style.backgroundColor} onChange={this.props.changeColor} />

                    <button className="submit-button" type="button" onClick={() => this.props.updateNote()}>Submit</button>
                    </div>

                </form>
            </section>
        )
    }
}