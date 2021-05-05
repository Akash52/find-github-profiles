import React, { useReducer } from 'react'
import axios from 'axios'

import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from '../types'

let REACT_CLIENT_ID = 'ccd3a0c757c978538dd4'
let REACT_CLIENT_KEY = '05579e08c00b61cae13f066d6b5dc818e8b71842'

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  //Search Users

  //Get User

  // Get Repos

  // Clear Users

  // Set Loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
