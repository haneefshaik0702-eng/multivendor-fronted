import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Replace with your backend Render URL if needed
    fetch("https://ckend-6ozb.onrender.com/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message || "Backend connected successfully"))
      .catch((err) => {
        console.error("Error fetching data:", err);
        setMessage("Failed to connect to backend");
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Multivendor Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
