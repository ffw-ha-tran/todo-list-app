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
      <li onClick={() => onSelectedItem(id)}>
        <h2 className="title">{editableTitle}</h2>
        <div className="description">{editableDescription}</div>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onItemDelete(id)}>Delete</button>
      </li>
  );
}