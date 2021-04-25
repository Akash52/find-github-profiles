import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: '',
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.text === '') {
      this.props.setAlert('Please Enter Somethig')
    } else {
      this.props.searchUsers(this.state.text)
      this.setState({ text: '' })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const { showClear, clearUsers } = this.props
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="flex m-3 ">
            <input
              className="w-full rounded-full p-2 placeholder-blueGray-500 text-blueGray-600 relative  bg-white  text-md  border-4 border-light-blue-500 border-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              name="text"
              type="text"
              placeholder="Search Users..."
              value={this.state.text}
              onChange={this.onChange}
            />
            <button className="bg-red-500 hover:bg-red-700 focus:outline-none rounded-full text-white p-2 pl-4 pr-4 ml-1">
              <p className="font-semibold text-lg">Search</p>
            </button>
          </div>
        </form>
        {showClear && (
          <div className="flex  justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 uppercase font-semibold text-white tracking-wider py-2 px-4 rounded opacity-50"
              onClick={clearUsers}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Search
