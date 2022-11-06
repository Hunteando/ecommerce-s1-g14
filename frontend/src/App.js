import React from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/products/:category" element={<ProductList />}/>
      <Route exact path="/product/:id" element={<Product />}/>
      <Route exact path="/cart" element={<Cart />}/>
      <Route exact path="/login" element={<Login />} {...user ? <Navigate to="/"/> : <Login />} />
      <Route exact path="/register" element={<Register />} {...user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  )
}

export default App