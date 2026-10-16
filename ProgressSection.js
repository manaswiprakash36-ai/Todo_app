import React from 'react';
import './ProgressSection.css';
import KawaiiTeddy from './KawaiiTeddy';

function ProgressSection({ completedCount, totalCount }) {
  const progressPercentage = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <div className="progress-section">
      <div className="progress-content">
        <div className="keep-it-up">
          <h2>Keep it up!</h2>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="completion-badge">
        <span className="completion-text">
          {completedCount}/{totalCount}
        </span>
      </div>

      <KawaiiTeddy />
    </div>
  );
}

export default ProgressSection;