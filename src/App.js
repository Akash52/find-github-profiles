import React from 'react'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'
import Search from './components/Layout/Users/Search'

const App = () => {
  return (
    <main className="bg-pink-50">
      <Navbar />
      <section className="pt-5 pb-5">
        <div className="container mx-auto px-4">
          <Seaction />
          <Search />

          <div className="p-3 flex flex-wrap mt-10">
            <div className="w-full p-5 md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
              <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    className="shadow-xl rounded-full max-w-full mx-auto  hover:opacity-80 transition-opacity duration-500 ease-in"
                    style={{ maxWidth: '150px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <div className="mt-6">
                      <button
                        className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all   duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                        type="button"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
              <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    className="shadow-xl rounded-full max-w-full mx-auto transition hover:opacity-80 transition-opacity duration-500 ease-in"
                    style={{ maxWidth: '150px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <div className="mt-6">
                      <button
                        className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all   duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                        type="button"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
              <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    className="shadow-xl rounded-full max-w-full mx-auto transition hover:opacity-80 transition-opacity duration-500 ease-in"
                    style={{ maxWidth: '150px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <div className="mt-6">
                      <button
                        className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all   duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                        type="button"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
              <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    className="shadow-xl rounded-full max-w-full mx-auto transition hover:opacity-80 transition-opacity duration-500 ease-in"
                    style={{ maxWidth: '150px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <div className="mt-6">
                      <button
                        className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all   duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                        type="button"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
              <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    className="shadow-xl rounded-full max-w-full mx-auto transition hover:opacity-80 transition-opacity duration-500 ease-in"
                    style={{ maxWidth: '150px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <div className="mt-6">
                      <button
                        className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all   duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                        type="button"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
