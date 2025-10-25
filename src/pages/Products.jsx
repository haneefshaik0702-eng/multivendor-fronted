import React, { useEffect, useState } from "react";
import { BASE_URL } from "../common/baseUrl";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/api/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setError("Failed to fetch products.");
      });
  }, []);

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  }

  if (products.length === 0) {
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Product List</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{product.name}</h3>
            <p>💰 Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
