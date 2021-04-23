import React from 'react'

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="w-full p-5 md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4 transform transition duration-500 hover:scale-110">
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
        <div className="px-6">
          <img
            alt="..."
            src={avatar_url}
            className="shadow-xl rounded-full max-w-full mx-auto  hover:opacity-80 transition-opacity duration-500 ease-in"
            style={{ maxWidth: '150px' }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">{login}</h5>
            <div className="mt-6">
              <button
                className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all   duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                type="button"
              >
                <a href={html_url}>More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Useritem
