import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import Logo from '../assets/logo.jpg'

const Nav = () => {
  return (
    <div>
<header className="border-b border-gray-100 text-black bg-white">
  <div
    className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
  >
    <div className="flex items-center">
     

      <img src={Logo} title="Don Remolo" className="flex w-20 m-3 rounded-full p-2" alt='Don Remolo'/>
    </div>

    <div className="flex items-center justify-end flex-1 text-[#e54926]">
      <nav
        className="hidden lg:uppercase lg:text-[#e54926] lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
      >
        <LinkRouter
          to="/"
          className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
        >
          Home
        </LinkRouter>


<LinkRouter
          to="/products"
          className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
        >
          MENU
        </LinkRouter>

        <LinkRouter
          to="/contact"
          className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
        >
          Contact
        </LinkRouter>
      </nav>

      <div className="flex items-center ml-8">
        <div
          className="flex items-center border-gray-100 divide-x divide-gray-100 border-x"
        >
          <span>
            <LinkRouter
              to="/cart"
              className="block p-6 border-b-4 border-transparent hover:border-red-700"
              title="Cart"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              <span className="sr-only">Cart</span>
            </LinkRouter>
          </span>

          <span>
            <LinkRouter
              to="/login"
              className="block p-6 border-b-4 border-transparent hover:border-red-700"
              title="Account"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span className="sr-only"> Account </span>
            </LinkRouter>
          </span>

         
        </div>
      </div>
    </div>
  </div>
</header>


    </div>
  )
}

export default Nav