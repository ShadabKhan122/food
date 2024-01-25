import React from 'react'
import Navbar from './Navbar'
import SearchFrom from './SearchFrom'
function Header() {
  return (
    <header className='header'>
      <Navbar/>
      <div className='d-flex flex-column justify-content-center align-items-center vh-50 banner'>
         <SearchFrom/>
         <h1 className='fw-semibold lh-lg'>What are your Favorite cuisines?</h1>
         <p className='text-uppercase my-3 lh-base'> Personalize your experience</p>
      </div>
    </header>
  )
}

export default Header
