import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      setMessage(todos.mssg);
    };
    getTodos();
  }, [])

  return (
    <main className="container">
      <h1>My Todo List</h1>
      {message && <p>{message}</p>}
    </main>
  );
}


