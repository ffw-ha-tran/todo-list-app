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
    <form onSubmit={handleSubmit} className="form-added">
      <input 
        className="border rounded border-solid border-zinc-400 p-2"
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input 
        className="border rounded border-solid border-zinc-400 p-2"
        type="text"
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button type="submit" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 text-white font-semibold px-8 py-3 rounded-md">Add</button>
    </form>
  );
}