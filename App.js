import React, { useState, useEffect } from 'react';
import './App.css';
import TodoCard from './components/TodoCard';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // 💾 Load tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kawaiiTasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      // Default tasks
      setTasks([
        { id: 1, text: 'study', completed: true },
        { id: 2, text: 'sleep', completed: false }
      ]);
    }
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem('kawaiiTasks', JSON.stringify(tasks));
  }, [tasks]);

  // ➕ Add task
  const addTask = () => {
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  // 🗑️ Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // ✅ Toggle completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // ✏️ Edit task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="app-container">
      <TodoCard
        tasks={tasks}
        completedCount={completedCount}
        totalCount={totalCount}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        onEditTask={editTask}
      />
    </div>
  );
}

export default App;