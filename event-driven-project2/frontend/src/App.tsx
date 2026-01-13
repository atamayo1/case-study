import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [message, setMessage] = useState<string>("");
  const [results, setResults] = useState<[string, string][]>([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    await fetch("http://localhost:3001/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    setMessage("");
  };

  const getResults = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/results");
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error("Error fetching results", err);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getResults();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Event Driven Demo</h1>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a message"
      />

      <button onClick={sendMessage}>Send</button>

      <h2>Results</h2>

      <ul>
        {results.length > 0 && results.map(([id, result]) => (
          <li key={id}>
            <strong>{id}</strong>: {result}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
