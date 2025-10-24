import React, {useEffect, useState} from 'react'

export default function Products(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const base = import.meta.env.VITE_API_BASE_URL || ''

  useEffect(()=>{
    async function load(){
      try{
        const res = await fetch(`${base}/api/products`)
        if(!res.ok) throw new Error('Network response not ok')
        const data = await res.json()
        setProducts(data)
      }catch(e){
        console.error(e)
      }finally{
        setLoading(false)
      }
    }
    load()
  },[])

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      {loading ? <p>Loading...</p> : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products && products.length ? products.map(p=>(
          <div key={p._id || p.id || p.name} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{p.name || p.title}</h3>
            <p className="text-sm text-gray-600">{p.description || ''}</p>
            <p className="mt-2 font-medium">₹{p.price || p.cost || '—'}</p>
          </div>
        )) : !loading && <p className="text-sm text-gray-600">No products found or failed to fetch.</p>}
      </div>
    </div>
  )
}
