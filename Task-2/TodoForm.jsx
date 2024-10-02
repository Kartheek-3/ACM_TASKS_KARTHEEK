import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, currentTask, setEditing }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (currentTask) {
      setInput(currentTask.text);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    if (currentTask) {
      addTodo({
        ...currentTask,
        text: input
      });
      setEditing(false);
    } else {
      addTodo({
        id: Date.now(),
        text: input,
        completed: false,
      });
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TodoForm;
