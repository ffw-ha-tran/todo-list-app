import React from "react";
import { useState } from "react";

export default function AddTodo({onAdd}) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (newTitle.trim() === '' || newDescription.trim() === '') {
      alert("Please enter both a title and description.");
      return; // Stop further execution
    }
    onAdd({title: newTitle, description: newDescription});
    setNewTitle('');
    setNewDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input 
        type="text"
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}