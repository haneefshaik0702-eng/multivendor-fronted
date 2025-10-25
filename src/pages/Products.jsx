import React, { useEffect, useState } from "react";
import { BASE_URL } from "../common/baseUrl";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/api/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setError("Failed to fetch products.");
      });
  }, []);

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;
