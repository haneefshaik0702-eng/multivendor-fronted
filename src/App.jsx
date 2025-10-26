import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://multivendor-backend-6ozb.onrender.com/api/test")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to connect");
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("❌ Failed to connect to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Multivendor Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
