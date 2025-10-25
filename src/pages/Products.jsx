import baseUrl from "../common/baseUrl";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${baseUrl}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>Failed to fetch products: {error}</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p._id}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
