import React, { Component } from 'react'

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      company,
      hireable,
    } = this.props.user

    const { loading } = this.props
    return (
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-5 md:w-6/12 lg:w-4/12 lg:mb-0 mb-6 px-4 transform transition duration-500 hover:scale-110">
          <div className="max-w-md p-10 px-8 bg-white shadow-lg rounded-lg my-2">
            <div className="flex justify-center">
              <img
                className="w-20 h-20 cursor-pointer object-cover rounded-full border-2 border-indigo-500  hover:opacity-80 transition-opacity duration-500 ease-in"
                src={avatar_url}
                alt=""
              />
            </div>
            <div>
              <div className="flex justify-center mt-4">
                <span className="text-xl font-medium text-indigo-500">
                  {name}
                </span>
              </div>
              <div className="font-bold flex justify-center text-ml m-1">
                Location : {location}
              </div>
              <p className="mt-2 text-gray-600">
                <span className="font-bold text-gray-700">Bio </span> : {bio}
              </p>
            </div>

            <button className=" py-2 px-3 m-2 text-white font-semibold rounded  bg-green-400 hover:bg-green-600 ">
              <a href={html_url}>Visit Github Profile</a>
            </button>
            <p className="mt-2 text-gray-600">
              <span className="font-bold text-gray-700">Username </span> :{' '}
              {login}
            </p>
            <p className="text-gray-600">
              <span className="font-bold text-gray-700">Company </span> :{' '}
              {company}
            </p>
            <p className="text-gray-600">
              <span className="font-bold _blank text-gray-700">Website </span> :{' '}
              <a href={blog}>{blog}</a>
            </p>

            <div className="flex justify-between px-6 py-4">
              <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #Followers {followers}
              </span>
              <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #Following {following}
              </span>
            </div>
            <div className="flex justify-between px-6">
              <span className="inline-block bg-red-100 rounded-full px-3  text-sm font-semibold text-grey-darker mr-2">
                #Public Repos {public_repos}
              </span>
              <span className="inline-block bg-yellow-100 rounded-full px-3  text-sm font-semibold text-grey-darker mr-2">
                #Public Gists {public_gists}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full p-5 md:w-6/12 lg:w-4/12 lg:mb-0 mb-6 px-4 transform transition duration-500 hover:scale-110">
          <div className="max-w-md p-10 px-8 bg-white shadow-lg rounded-lg m-2">
            <button class="py-2 px-3 text-white font-semibold rounded m-2 bg-green-500 hover:bg-green-700 ">
              <a href={html_url}>Visit Github Profile</a>
            </button>

            <button class=" py-2 px-3 font-semibold rounded m-2 bg-purple-300 hover:bg-purple-500 ...">
              Hover me
            </button>
            <div class="flex  px-6 py-4">
              <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #followers {followers}
              </span>
              <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #travel
              </span>
              <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default User
