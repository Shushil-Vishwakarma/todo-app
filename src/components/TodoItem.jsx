import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      task,
      description,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="edit-form">
          <input 
            type="text" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div className="todo-content">
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <select 
            value={todo.status} 
            onChange={(e) => updateTodo({ ...todo, status: e.target.value })}
          >
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
