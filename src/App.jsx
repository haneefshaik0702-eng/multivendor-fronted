import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
