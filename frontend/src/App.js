import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch message from the backend
    fetch('http://localhost:5000/api/messages')
      .then(res => res.json())
      .then(data => setMessage(data.text || "No message"))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Message from MongoDB:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
