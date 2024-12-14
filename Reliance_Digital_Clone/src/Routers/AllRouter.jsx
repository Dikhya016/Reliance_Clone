import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import ProductDetails from '../Pages/ProductDetails'
import ViewAll from '../Pages/ViewAll'

function AllRouter() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Login />} />
              <Route path='/:id' element={<ProductDetails />} />
              <Route path='/all_products' element={<ViewAll/>} />
          </Routes>
      </>
  )
}

export default AllRouter