import React, { useState, useContext } from 'react'
import GithubContext from '../../../Context/Github/githubContext'
import Seaction from './../Seaction'
import Users from './Users'

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext)
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please Enter Somethig')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <Seaction />
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="flex m-3 ">
          <input
            className="relative w-full p-2 bg-white border-4 border-opacity-50 rounded-full placeholder-blueGray-500 text-blueGray-600 text-md border-light-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            name="text"
            type="text"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
          />
          <button className="p-2 pl-4 pr-4 ml-1 text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none">
            <p className="text-lg font-semibold">Search</p>
          </button>
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <div className="flex justify-center">
          <button
            className="px-4 py-2 font-semibold tracking-wider text-white uppercase bg-blue-700 rounded hover:bg-blue-600 opacity-70"
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        </div>
      )}
      <Users />
    </div>
  )
}

export default Search
