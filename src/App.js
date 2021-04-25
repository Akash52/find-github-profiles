import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'

import Search from './components/Layout/Users/Search'
import Users from './components/Layout/Users/Users'

let REACT_CLIENT_ID = 'ccd3a0c757c978538dd4'
let REACT_CLIENT_KEY = '05579e08c00b61cae13f066d6b5dc818e8b71842'

class App extends Component {
  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users?client_id=${REACT_CLIENT_ID}&client_secret=${REACT_CLIENT_KEY}`
    )

    this.setState({ users: res.data, loading: false })
  }
  render() {
    return (
      <main className="bg-pink-50">
        <Navbar />
        <section className="pt-5 pb-5">
          <div className="container mx-auto px-4">
            <Seaction />
            <Search />

            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        </section>
      </main>
    )
  }
}

export default App
