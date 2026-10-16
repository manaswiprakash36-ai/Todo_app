import React from 'react';
import './TaskInput.css';

function TaskInput({ inputValue, onInputChange, onAddTask }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAddTask();
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        className="task-input"
        placeholder="Enter task ✧♡"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="add-btn" onClick={onAddTask}>
        +
      </button>
    </div>
  );
}

export default TaskInput;