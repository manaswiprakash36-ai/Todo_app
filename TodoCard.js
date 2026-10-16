import React from 'react';
import './TodoCard.css';
import ProgressSection from './ProgressSection';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function TodoCard({
  tasks,
  completedCount,
  totalCount,
  inputValue,
  onInputChange,
  onAddTask,
  onDeleteTask,
  onToggleTask,
  onEditTask  // ✅ यह add है
}) {
  const [currentFilter, setCurrentFilter] = React.useState('all');

  // 🔥 Filter लागू करना
  const getFilteredTasks = () => {
    if (currentFilter === 'completed') {
      return tasks.filter(t => t.completed === true);
    } else if (currentFilter === 'active') {
      return tasks.filter(t => t.completed === false);
    }
    return tasks; // 'all'
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="todo-card">
      {/* Header */}
      <div className="card-header">
        <h1>To Do List</h1>
      </div>

      {/* Progress Section */}
      <ProgressSection
        completedCount={completedCount}
        totalCount={totalCount}
      />

      {/* Task Input */}
      <TaskInput
        inputValue={inputValue}
        onInputChange={onInputChange}
        onAddTask={onAddTask}
      />

      {/* 🔥 FILTERS */}
      <div className="filters">
        <button
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => setCurrentFilter('all')}
        >
          📋 All
        </button>
        <button
          className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
          onClick={() => setCurrentFilter('active')}
        >
          ⏳ Active
        </button>
        <button
          className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
          onClick={() => setCurrentFilter('completed')}
        >
          ✅ Completed
        </button>
      </div>

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
        onEditTask={onEditTask}  // ✅ यह add है
      />
    </div>
  );
}

export default TodoCard;