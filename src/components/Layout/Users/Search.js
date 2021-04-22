import React from 'react'

const Search = () => {
  return (
    <div>
      <div class="flex m-3 ">
        <input
          class="w-full rounded-full p-2 placeholder-blueGray-500 text-blueGray-600 relative  bg-white  text-md  border-4 border-light-blue-500 border-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          type="text"
          placeholder="Search Users..."
        />
        <button class="bg-red-500 hover:bg-red-700 rounded-full text-white p-2 pl-4 pr-4 ml-1">
          <p class="font-semibold text-lg">Search</p>
        </button>
      </div>
    </div>
  )
}

export default Search
