const { combineReducers } = require('redux')
const {
    reducer: todos,
} = require('./todos')

module.exports = combineReducers({
    todos,
})
