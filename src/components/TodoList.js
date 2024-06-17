import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todos, onDelete, onChanges, onSelect}) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem id={todo.id} key={todo.id} title={todo.title} description={todo.description} onItemDelete={onDelete} onItemChanges={onChanges} onSelectedItem={onSelect}></TodoItem>
      ))}
    </div>
  );
}