import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {

    render() {
        const { message, author  } = this.props;

        return (
            <p>
                <i>{author}</i>: {message}
            </p>
        )
    }
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message;