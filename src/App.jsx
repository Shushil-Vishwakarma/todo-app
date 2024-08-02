import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [nextId, setNextId] = useState(1);

  const addTodo = (todo) => {
    todo.id = nextId;
    setTodos([...todos, todo]);
    setNextId(nextId + 1);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not completed') return todo.status === 'not completed';
    return true;
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="filter">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('not completed')}>Not Completed</button>
      </div>
      <TodoList 
        todos={filteredTodos} 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;
