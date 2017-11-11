const React = require('react')
const TodoList = require('../todo-list/todo-list')
const { connect } = require('react-redux')


module.exports = connect()(() => (
    <div>
        <TodoList />
    </div>
))
