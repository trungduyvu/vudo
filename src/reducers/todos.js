const { handleActions } = require('redux-actions')

const ADD_TODO = "todos/ADD_TODO"

const initialState = {
    todos: []
}

module.exports = {
    addTodoActionCreator: (todo) => ({
        type: ADD_TODO,
        todo: todo
    }),
    reducer: handleActions({
        [ADD_TODO]: (state, action) => {
            alert(action.todo)
            return state
        }
    }, initialState)
}