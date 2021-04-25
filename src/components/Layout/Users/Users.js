import React from 'react'
import Spinner from '../Spinner'
import UserItem from './Useritem'

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="p-3 flex flex-wrap mt-5">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users
