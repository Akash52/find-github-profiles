import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: '',
  }

  onSubmit = (e) => {
    e.preventDefault()

    console.log(this.state.text)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div class="flex m-3 ">
            <input
              class="w-full rounded-full p-2 placeholder-blueGray-500 text-blueGray-600 relative  bg-white  text-md  border-4 border-light-blue-500 border-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              name="text"
              type="text"
              placeholder="Search Users..."
              value={this.state.text}
              onChange={this.onChange}
            />
            <button class="bg-red-500 hover:bg-red-700 rounded-full text-white p-2 pl-4 pr-4 ml-1">
              <p class="font-semibold text-lg">Search</p>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Search
