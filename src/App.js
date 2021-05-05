import axios from 'axios'
import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Alert from './components/Layout/Alert'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'

import Search from './components/Layout/Users/Search'
import Users from './components/Layout/Users/Users'
import User from './components/Layout/Users/User'
import About from './components/Pages/About'

import GithubState from './Context/Github/GithubState'

let REACT_CLIENT_ID = 'ccd3a0c757c978538dd4'
let REACT_CLIENT_KEY = '05579e08c00b61cae13f066d6b5dc818e8b71842'

const App = (props) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  // async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${REACT_CLIENT_ID}&client_secret=${REACT_CLIENT_KEY}`
  //   )

  //   this.setState({ users: res.data.items, loading: false })
  // }

  //Search Users
  const searchUsers = async (text) => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&{client_id=${REACT_CLIENT_ID}&client_secret=${REACT_CLIENT_KEY}`
    )

    setUsers(res.data.items)
    setLoading(false)
  }

  //Get single User

  const getUser = async (username) => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}?&{client_id=${REACT_CLIENT_ID}&client_secret=${REACT_CLIENT_KEY}`
    )

    setUser(res.data)
    setLoading(false)
  }

  // Get user Repos

  const getUserRepos = async (username) => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${REACT_CLIENT_ID}&client_secret=${REACT_CLIENT_KEY}`
    )

    setRepos(res.data)
    setLoading(false)
  }

  //Clear Users

  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }
  //Set alert
  const showAlert = (msg) => {
    setAlert({ msg })

    setTimeout(() => setAlert(null), 3000)
  }

  return (
    <GithubState>
      <Router>
        <main className="bg-pink-50">
          <Navbar />
          <section className="pt-5 pb-5">
            <div className="container mx-auto px-4">
              <Route exact path="/" component={Seaction} />
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search
                        searchUsers={searchUsers}
                        clearUsers={clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={showAlert}
                      />
                      <Users loading={loading} users={users} />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={(props) => (
                    <User
                      {...props}
                      getUser={getUser}
                      getUserRepos={getUserRepos}
                      repos={repos}
                      user={user}
                      loading={loading}
                    />
                  )}
                />
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    </GithubState>
  )
}

export default App
