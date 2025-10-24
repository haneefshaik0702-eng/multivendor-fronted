import React from 'react'
export default function Home(){
  return (
    <div className="py-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Multivendor 🛒</h1>
      <p className="mb-6">This is a starter frontend connected to your backend. Click on Products to fetch data.</p>
      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm">Status: <span className="font-medium text-green-600">Connected to backend</span></p>
      </div>
    </div>
  )
}
