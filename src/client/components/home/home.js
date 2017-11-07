const React = require('react')
const TodoList = require('../todo-list/todo-list')
const { connect } = require('react-redux')
class Home extends React.Component {
    render() {
        return (
            <div>
                <TodoList/>
            </div>
        )
    }
}

module.exports = connect()(Home)