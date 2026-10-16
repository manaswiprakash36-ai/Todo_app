import React from 'react';
import './TaskList.css';

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  const handleEdit = (task) => {
    const newText = prompt('Edit task:', task.text);
    
    if (newText && newText.trim() !== '') {
      onEditTask(task.id, newText.trim());
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message">✧ No tasks yet! Add one to get started! ♡</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="task-item">
            <input
              type="checkbox"
              className="task-checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
              {task.text}
            </span>
            <div className="task-actions">
              <button
                className="edit-btn"
                onClick={() => handleEdit(task)}
              >
                ✏️
              </button>
              <button
                className="delete-btn"
                onClick={() => onDeleteTask(task.id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;