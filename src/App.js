import React from 'react'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'
import Search from './components/Layout/Users/Search'
import Useritem from './components/Layout/Users/Useritem'
import Users from './components/Layout/Users/Users'

const App = () => {
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

export default App
