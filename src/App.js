import "./App.css";
import { useEffect, useState } from "react";
import { ListComments } from "./components/ListComments/ListComments";
function App() {
  const [comments, setComments] = useState([]);
  const [newNote, setNewNote] = useState({
    id: "",
    name: "",
    body: "",
    email: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_start=0&_limit=15")
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);

  const handleChangeTittle = (e) => {
    const newTittle = e.target.value;
    setNewNote({ ...newNote, name: newTittle });
  };
  const handleChangeDescription = (e) => {
    const newDescription = e.target.value;
    setNewNote({ ...newNote, body: newDescription });
  };
  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setNewNote({ ...newNote, email: newEmail });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const noteAddToComments = {
      id: comments.length + 1,
      name: newNote.name,
      body: newNote.body,
      email: newNote.email,
    };
    //setComments([...comments, noteAddToComments]);   <-- es lo mismo que la linea 40
    setComments(comments.concat(noteAddToComments));
    setNewNote({
      name: "",
      body: "",
      email: "",
    });
  };

  return (
    <div className="App">
      <h1>Fetching y mutación de datos</h1>
      <h2>JSON Placeholder</h2>
      <ListComments listComments={comments} />
      <div>
        <form onSubmit={onsubmit}>
          <input
            type="text"
            placeholder="Tittle comment"
            required
            onChange={handleChangeTittle}
            value={newNote.name}
          />
          <input
            type="text"
            placeholder="Description comment"
            required
            onChange={handleChangeDescription}
            value={newNote.body}
          />
          <input
            type="email"
            placeholder="Your email"
            required
            onChange={handleChangeEmail}
            value={newNote.email}
          />
          <button type="submit">Add comment</button>
        </form>
      </div>
    </div>
  );
}

export default App;
