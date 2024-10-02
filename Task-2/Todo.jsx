import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }}>
      <span>{todo.text}</span>
      <div>
        <button onClick={() => toggleComplete(todo.id)}>Complete</button>
        <button onClick={() => editTodo(todo.id)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
