import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import Logo from '../assets/logo.jpg'

const Nav = () => {
  return (
    <div>
<header className="border-black bg-gray-900">
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

     
      </nav>

      <div className="flex items-center ml-8">
        <div
          className="flex items-center border-black divide-x divide-black border-x"
        >
          <span>
            <LinkRouter
              to="/cart"
              className="block p-5 border-b hover:border-red-700"
              title="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>


              <span className="sr-only">Cart</span>
            </LinkRouter>
          </span>

          <span>
            <LinkRouter
              to="/login"
              className="block p-5 border-b hover:border-red-700"
              title="Account"
            >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
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