import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">Multivendor</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-sm hover:underline">Home</Link>
          <Link to="/products" className="text-sm hover:underline">Products</Link>
        </nav>
      </div>
    </header>
  )
}
