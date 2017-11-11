/* eslint-disable */

import PropTypes from 'prop-types'
import React from 'react'

class TodoItem extends React.Component {
    render() {
        const { todo } = this.props
        return (
            <li>{todo.value}</li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

module.exports = TodoItem
