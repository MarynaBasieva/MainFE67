import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <span className='logo'>Art-Booking.com</span>
        <div className="navItems">
          <button className='navButton'>Зареєструватися</button>
          <button className='navButton'>Увійти</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
