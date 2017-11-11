const { handleActions } = require('redux-actions')

const ADD_TODO = 'todos/ADD_TODO'

const initialState = {
    todos: [
        { value: 'test' },
        { value: 'test1' },
        { value: 'test2' },
    ],
}

module.exports = {
    addTodoActionCreator: todo => ({
        type: ADD_TODO,
        todo,
    }),
    reducer: handleActions({
        [ADD_TODO]: (state, action) => (state), // eslint-disable-line no-unused-vars
    }, initialState),
}
