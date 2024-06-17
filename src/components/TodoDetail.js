import React, { useState } from 'react';

function TodoDetail({ todo, onEdit, onDelete, show, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const [priority, setPriority] = useState(todo.priority);

  const handleSave = () => {
    onEdit({ ...todo, title, description, dueDate, priority });
    setIsEditing(false);
  };

  return (
    <dialog className='todo-modal' open>
      {isEditing ? (
        <div className='todo-detail-edit-form'>
          <input
            className="border rounded border-solid border-zinc-400 p-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border rounded border-solid border-zinc-400 p-2"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="border rounded border-solid border-zinc-400 p-2"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select
            className="border rounded border-solid border-zinc-400 p-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <div className='group-buttons'>
            <button className='btn' onClick={handleSave}>Save</button>
            <button className='btn' onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className='text-xl font-bold text-cyan-800'>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>Due Date: {todo.dueDate}</p>
          <p>Priority: {todo.priority}</p>
          <button className='btn' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='btn' onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      )}
      <form method='dialog'>
        <button className='btn-close'>X</button>
      </form>
    </dialog>
  );
}

export default TodoDetail;