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
import Login from './components/Pages/Login'

const App = () => {
  const [alert, setAlert] = useState(null)

  const showAlert = (msg) => {
    setAlert({ msg })

    setTimeout(() => setAlert(null), 3000)
  }

  return (
    <GithubState>
      <Router>
        <Navbar />
        <Route exact path="/login" component={Login} />
        {/* <section className="pt-5 pb-5">
          <div className="container px-4 mx-auto">
            <Route exact path="/" component={Seaction} />
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </section> */}
      </Router>
    </GithubState>
  )
}

export default App
