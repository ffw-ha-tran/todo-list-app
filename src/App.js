import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoDetail from './components/TodoDetail';
import './App.css';
import { TODO_CONTENTS } from './data';

function App() {
  const [todos, setTodos] = useState(TODO_CONTENTS);
  const [nextId, setNextId] = useState(todos.length + 1);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, {...newTodo, id: nextId, dueDate: '', priority: ''}]);
    setNextId(nextId + 1);
    console.log(newTodo);
  }

  const handleEditToDo = (newEditToDo) => {
    console.log(newEditToDo);
    const newItems = todos.map(todo => todo.id === newEditToDo.id ? { ...todo, ...newEditToDo } : todo);
    setTodos(newItems);
    setSelectedTodo(newEditToDo);
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleSelectedTodo = (id) => {
    console.log(id);
    const todo = todos.find(todo => todo.id === id);
    setSelectedTodo(todo);
  }

  const handleCloseModal = () => {
    setSelectedTodo(null); // Close the modal
  };

  return (
    <div className={`App ${selectedTodo ? 'show-modal' : ''}`}>
      <Header></Header>
      <AddTodo onAdd={handleAddTodo}></AddTodo>
      <TodoList todos={todos} onChanges={handleEditToDo} onDelete={handleDeleteTodo} onSelect={handleSelectedTodo}></TodoList>
      {selectedTodo && <TodoDetail todo={selectedTodo} onEdit={handleEditToDo} onDelete={handleDeleteTodo} onClose={handleCloseModal}></TodoDetail>}
    </div>
  );
}

export default App;
