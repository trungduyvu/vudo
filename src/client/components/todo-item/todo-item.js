const React = require('react')

class TodoItem extends React.Component {
    render() {
        let todo = this.props.todo
        return (
            <li>{todo.value}</li>
        )

    }
}

module.exports = TodoItem