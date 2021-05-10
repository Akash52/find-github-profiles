import React, { useEffect, useContext, Fragment } from 'react'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'
import Repos from '../../Repos/Repos'
import GithubContext from '../../../Context/Github/githubContext'

const User = ({ repos, getUserRepos, match }) => {
  const githubContext = useContext(GithubContext)
  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    // eslint-disable-next-line
  }, [])

  const { getUser, loading, user } = githubContext

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
  } = user

  if (loading) return <Spinner />
  return (
    <Fragment>
      <Link
        to="/"
        className="ml-10 py-2 px-3 text-white font-semibold rounded m-2 bg-blue-500 hover:bg-blue-700"
      >
        Back
      </Link>
      <span className="font-bold text-gray-700">Hireable </span>:{' '}
      {hireable ? (
        <i className="fas fa-check text-green-500" />
      ) : (
        <i className="fas fa-times-circle text-red-600" />
      )}
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-5 md:w-6/12 lg:w-4/12 lg:mb-0px-4 transform transition duration-500 hover:scale-105">
          <div className="max-w-md p-3 px-8 bg-white shadow-lg rounded-lg my-2">
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

            <button className="py-2 px-3 m-2 text-white font-semibold rounded  bg-green-400 hover:bg-green-600 ">
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

            <div className="flex justify-between m-2 px-4 py-2">
              <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #Followers {followers}
              </span>
              <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #Following {following}
              </span>
            </div>
            <div className="flex justify-between  m-2 px-4 py-2">
              <span className="inline-block bg-red-100 rounded-full px-3  text-sm font-semibold text-grey-darker mr-2">
                #Public Repos {public_repos}
              </span>
              <span className="inline-block bg-yellow-100 rounded-full px-3  text-sm font-semibold text-grey-darker  mr-2">
                #Public Gists {public_gists}
              </span>
            </div>
            <Repos repos={repos} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default User
