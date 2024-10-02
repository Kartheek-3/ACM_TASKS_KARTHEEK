import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (editing) {
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } else {
      setTodos([todo, ...todos]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const taskToEdit = todos.find((todo) => todo.id === id);
    setCurrentTask(taskToEdit);
    setEditing(true);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} currentTask={currentTask} setEditing={setEditing} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
