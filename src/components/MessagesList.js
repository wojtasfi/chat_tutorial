import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message';

class MessagesList extends Component {

    render() {
        const { messages } = this.props;

        return (
            <section id="messages-list">
                <ul>
                    {messages.map(msg => (
                        <Message
                            key={msg.id}
                            {...msg} />
                    ))}
                </ul>
            </section>
        )
    }
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default MessagesList;