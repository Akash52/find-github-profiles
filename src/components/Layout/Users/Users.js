import React, { Component } from 'react'
import UserItem from './Useritem'

class Users extends Component {
  render() {
    return (
      <div className="p-3 flex flex-wrap mt-10">
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users
