import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <div
        className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
        role="alert"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
        </svg>
        <p>Something happened that you should know about.</p>
      </div>

      <section className="pt-5 pb-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-5">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="uppercase text-4xl font-semibold">
                Github Finder
              </h2>
              <p className="uppercase text-lg leading-relaxed m-4 text-gray-600">
                You will find easly any Github user profiles
              </p>
            </div>
          </div>
          <div className="m-3 p-3">
            <input
              type="text"
              placeholder="Search Users..."
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
            />
          </div>
          <div className="shadow-xl rounded-md p-3 flex flex-wrap mt-10">
            <div className="w-full p-5 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
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
                      className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                      type="button"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  className="shadow-xl rounded-full max-w-full mx-auto transition hover:opacity-80 transition-opacity duration-500 ease-in"
                  style={{ maxWidth: '220px' }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Romina Hadid</h5>
                  <div className="mt-6">
                    <button
                      className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                      type="button"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  className="shadow-xl rounded-full max-w-full mx-auto transition hover:opacity-80 transition-opacity duration-500 ease-in"
                  style={{ maxWidth: '220px' }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Romina Hadid</h5>
                  <div className="mt-6">
                    <button
                      className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                      type="button"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  className="shadow-xl rounded-full max-w-full mx-auto transition hover:opacity-80 transition-opacity duration-500 ease-in"
                  style={{ maxWidth: '220px' }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Romina Hadid</h5>
                  <div className="mt-6">
                    <button
                      className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                      type="button"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  className="shadow-xl rounded-full max-w-full mx-auto transition hover:opacity-80 transition-opacity duration-500 ease-in"
                  style={{ maxWidth: '220px' }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Romina Hadid</h5>
                  <div className="mt-6">
                    <button
                      className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
                      type="button"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  className="shadow-xl rounded-full max-w-full mx-auto  hover:opacity-80 transition-opacity duration-500 ease-in"
                  style={{ maxWidth: '220px' }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Romina Hadid</h5>
                  <div className="mt-6">
                    <button
                      className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."
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
      </section>
    </main>
  )
}

export default App
