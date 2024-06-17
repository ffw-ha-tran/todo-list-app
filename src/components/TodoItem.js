import React from "react";
import { useState } from "react";


export default function TodoItem({
  id,
  title, 
  description, 
  onItemDelete, 
  onItemChanges,
  onSelectedItem}) {
  const [isEditTitle, setIsEditTitle] = useState(title);
  const [isEditDescription, setIsEditDescription] = useState(description);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      // onChangeTitle(isEditTitle);
      // onChangeDescription(isEditDescription);
      // Validate empty input before calling onItemChanges
      if (isEditTitle.trim() === "" || isEditDescription.trim() === "") {
        alert("Please enter both a title and description.");
        return; // Stop execution if empty input
      }
      onItemChanges({id, title: isEditTitle, description: isEditDescription});
    }
  }

  function handleChangeTitle(event) {
    setIsEditTitle(event.target.value);
  }

  function handleChangeDescription(event) {
    setIsEditDescription(event.target.value)
  }

  let editableTitle = <span>{title}</span>;
  let editableDescription = <span>{description}</span>

  if (isEditing) {
    editableTitle = (
      <input type="text" defaultValue={isEditTitle} onChange={handleChangeTitle} required />
    );
    editableDescription = (
      <input type="text" defaultValue={isEditDescription} onChange={handleChangeDescription} required />
    );
  }

  return (
      <li onClick={() => onSelectedItem(id)} className="todo-item">
        <div className="todo-item-wrap">
        <div className="group-content">
          <h2 className="title text-xl font-bold text-cyan-800">{editableTitle}</h2>
          <div className="description">{editableDescription}</div>
        </div>
        <div className="group-buttons">
          <button type="button" className="btn" onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          <button type="button" className="btn" onClick={() => onItemDelete(id)}>Delete</button>
        </div>
        </div>
      </li>
  );
}