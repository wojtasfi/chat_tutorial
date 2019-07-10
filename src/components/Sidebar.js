import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Sidebar extends Component {

    render() {
        const { users } = this.props;
        console.log(users)
        return (
            <aside id="sidebar" className="sidebar">
                <ul>
                    {users.map(user => {
                        return <li key={user.id}>{user.name}</li>
                    })}
                </ul>
            </aside>
        )
    }
}

Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Sidebar;