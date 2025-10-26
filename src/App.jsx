import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://ckend-6ozb.onrender.com/api/test") // your backend URL
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Multivendor Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
