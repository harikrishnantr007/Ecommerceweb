import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import ProductDetails from '../Pages/ProductDetails'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Checkout from '../Pages/Checkout'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="home"/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='/shop/:id' element={<ProductDetails/>}/>
      <Route path='Cart' element={<Cart/>}/>
      <Route path='/Checkout' element={<Checkout/>}/>
      
      <Route path='Login' element={<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Routers