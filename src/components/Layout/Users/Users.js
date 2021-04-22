import React, { Component } from 'react'
import UserItem from './Useritem'

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: '2',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: '3',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
    ],
  }
  render() {
    return (
      <div className="p-3 flex flex-wrap mt-10">
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users
