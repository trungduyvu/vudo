const React = require('react')
const TodoItem = require('../todo-item/todo-item')

class TodoList extends React.Component {
    render() {
        let todos = this.props.todos
        if (!!todos) {
            return todos.map((todo) => {
                return (
                    <ul>
                        <TodoItem ref={todo.id} todo={todo}></TodoItem>
                    </ul>
                )
            })
        } else {
            return (
                <div>No data</div>
            )
        }

    }
}

module.exports = TodoList