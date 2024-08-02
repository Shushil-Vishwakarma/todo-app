import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && description) {
      addTodo({
        task,
        description,
        status: 'not completed',
      });
      setTask('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <label>Task</label>
        <input 
          type="text" 
          value={task}
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter task" 
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input 
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter description" 
        />
      </div>

      <button type="submit" className="submit-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
