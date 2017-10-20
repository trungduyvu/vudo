const React = require('react');
const ReactDOM = require('react-dom');
const reducers = require('./reducers')
const App = require('./components/app/app')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const { BrowserRouter } = require('react-router-dom')

module.exports = ReactDOM.render((
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'))
