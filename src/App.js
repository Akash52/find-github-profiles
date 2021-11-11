import React, { useState, Fragment } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Alert from './components/Layout/Alert'
import Navbar from './components/Layout/Navbar'

import Search from './components/Layout/Users/Search'
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          {' '}
          <div className="container px-4 mx-auto">
            {/* <Route exact path="/" element={<Seaction />} /> */}
            <Alert alert={alert} />
            <Route exact path="/" element={<Search setAlert={showAlert} />} />
            {/* <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  element={<Search setAlert={showAlert} />}
                  element={<Users />}
                </Fragment>
              )}
            /> */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/user/:login" element={<User />} />
          </div>
        </Routes>
      </BrowserRouter>
    </GithubState>
  )
}

export default App
