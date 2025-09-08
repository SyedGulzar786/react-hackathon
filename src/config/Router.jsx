import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddToCart from '../pages/AddToCart'
import AppNavbar from '../components/Navbar/AppNavbar'
import Header from '../components/Header/Header'

const Router = () => {
  return (
<Routes>
    <Route path='/' element={<Header><Home/></Header>}/>
    <Route path='/addToCart' element={<Header><AddToCart/></Header>}/>
</Routes>
)
}

export default Router