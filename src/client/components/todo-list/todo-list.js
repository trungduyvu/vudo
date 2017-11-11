import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../todo-item/todo-item'

class TodoList extends React.Component {
    render() {
        const { todos } = this.props
        if (todos) {
            return todos.map(todo => (
                <ul>
                    <TodoItem ref={todo.id} todo={todo} />
                </ul>
            ))
        }
        return (
            <div>No data</div>
        )
    }
}


TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
}


module.exports = TodoList
