import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddMessage extends Component {

    constructor(props) {
        super(props)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.dispatch(event.target.value, 'Me')
            event.target.value = ''
        }
    }
    render() {
        return (
            <section id="new-message">
                <input onKeyPress={this.handleKeyPress}
                    type="text"
                    // ref={(node) => {
                    //     e.target = node
                    // }}
                    >
                </input>
            </section>
        )
    }
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage