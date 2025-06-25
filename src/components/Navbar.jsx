import React from 'react'

const Navbar = () => {
  return (
        <nav className='fixed top-0 left-0 z-50 md:p-9 p-3'>
            <img 
                src="/images/nav-logo.svg" 
                alt="spylt" 
                className='w-20 md:w-24'
            />
        </nav>
  )
}

export default Navbar
