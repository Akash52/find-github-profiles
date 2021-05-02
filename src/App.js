import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Alert from './components/Layout/Alert'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'

import Search from './components/Layout/Users/Search'
import Users from './components/Layout/Users/Users'
import User from './components/Layout/Users/User'
import About from './components/Pages/About'

let REACT_CLIENT_ID = 'ccd3a0c757c978538dd4'
let REACT_CLIENT_KEY = '05579e08c00b61cae13f066d6b5dc818e8b71842'

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  }

  // async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${REACT_CLIENT_ID}&client_secret=${REACT_CLIENT_KEY}`
  //   )

  //   this.setState({ users: res.data.items, loading: false })
  // }

  //Search Users
  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&{client_id=${REACT_CLIENT_ID}&client_secret=${REACT_CLIENT_KEY}`
    )

    this.setState({ users: res.data.items, loading: false })
  }

  //Get single User

  getUser = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users/${username}?&{client_id=${REACT_CLIENT_ID}&client_secret=${REACT_CLIENT_KEY}`
    )

    this.setState({ user: res.data, loading: false })
  }

  //Clear Users

  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }
  //Set alert
  setAlert = (msg) => {
    this.setState({ alert: { msg } })

    setTimeout(() => this.setState({ alert: null }), 3000)
  }
  render() {
    const { user, users, loading } = this.state
    return (
      <Router>
        <main className="bg-pink-50">
          <Navbar />
          <section className="pt-5 pb-5">
            <div className="container mx-auto px-4">
              <Route exact path="/" component={Seaction} />
              <Alert alert={this.state.alert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={this.setAlert}
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
                      getUser={this.getUser}
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
    )
  }
}

export default App
