import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'
import Search from './components/Layout/Users/Search'
import Users from './components/Layout/Users/Users'

class App extends Component {
  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users')
    console.log(res.data)
  }
  render() {
    return (
      <main className="bg-pink-50">
        <Navbar />
        <section className="pt-5 pb-5">
          <div className="container mx-auto px-4">
            <Seaction />
            <Search />

            <Users />
          </div>
        </section>
      </main>
    )
  }
}

export default App
