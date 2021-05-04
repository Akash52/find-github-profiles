import React from 'react'

export const RepoItem = ({ repo }) => {
  return (
    <div className="flex">
      <button class="py-2 px-3 text-white font-semibold rounded m-2 bg-red-400 hover:bg-red-500 ">
        <a href={repo.html_url}>{repo.name}</a>
      </button>
    </div>
  )
}

export default RepoItem
