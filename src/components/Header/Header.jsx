import React from 'react'
import AppNavbar from '../Navbar/AppNavbar'

const Header = ({children}) => {
  return (
   <AppNavbar>{children}</AppNavbar>
  )
}

export default Header