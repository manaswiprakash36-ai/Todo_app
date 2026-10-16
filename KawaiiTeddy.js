import React from 'react';
import './KawaiiTeddy.css';

function KawaiiTeddy() {
  return (
    <div className="teddy-container">
      <svg
        className="teddy-bear"
        viewBox="0 0 100 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body */}
        <circle cx="50" cy="70" r="28" fill="#E8D4C8" stroke="#8B6F6F" strokeWidth="1.5"/>

        {/* Head */}
        <circle cx="50" cy="35" r="24" fill="#E8D4C8" stroke="#8B6F6F" strokeWidth="1.5"/>

        {/* Left Ear */}
        <circle cx="32" cy="15" r="12" fill="#E8D4C8" stroke="#8B6F6F" strokeWidth="1.5"/>
        <circle cx="32" cy="15" r="7" fill="#F4C5D0"/>

        {/* Right Ear */}
        <circle cx="68" cy="15" r="12" fill="#E8D4C8" stroke="#8B6F6F" strokeWidth="1.5"/>
        <circle cx="68" cy="15" r="7" fill="#F4C5D0"/>

        {/* Left Eye */}
        <circle cx="42" cy="32" r="3" fill="#333333"/>
        <circle cx="41" cy="30.5" r="0.8" fill="#FFFFFF"/>

        {/* Right Eye */}
        <circle cx="58" cy="32" r="3" fill="#333333"/>
        <circle cx="59" cy="30.5" r="0.8" fill="#FFFFFF"/>

        {/* Left Blush */}
        <circle cx="35" cy="40" r="4" fill="#F4C5D0" opacity="0.7"/>

        {/* Right Blush */}
        <circle cx="65" cy="40" r="4" fill="#F4C5D0" opacity="0.7"/>

        {/* Mouth */}
        <path d="M 50 45 Q 48 48 46 47" stroke="#8B6F6F" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M 50 45 Q 52 48 54 47" stroke="#8B6F6F" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

        {/* Nose */}
        <circle cx="50" cy="42" r="2" fill="#8B6F6F"/>

        {/* Left Arm */}
        <ellipse cx="28" cy="65" rx="8" ry="16" fill="#E8D4C8" stroke="#8B6F6F" strokeWidth="1.5"/>

        {/* Right Arm */}
        <ellipse cx="72" cy="65" rx="8" ry="16" fill="#E8D4C8" stroke="#8B6F6F" strokeWidth="1.5"/>

        {/* Left Foot */}
        <ellipse cx="38" cy="95" rx="10" ry="12" fill="#E8D4C8" stroke="#8B6F6F" strokeWidth="1.5"/>

        {/* Right Foot */}
        <ellipse cx="62" cy="95" rx="10" ry="12" fill="#E8D4C8" stroke="#8B6F6F" strokeWidth="1.5"/>

        {/* Bow */}
        <circle cx="45" cy="10" r="4" fill="#87CEEB"/>
        <circle cx="55" cy="10" r="4" fill="#87CEEB"/>
        <circle cx="50" cy="10" r="2" fill="#87CEEB"/>
      </svg>

      {/* Star */}
      <div className="tiny-star">⭐</div>
    </div>
  );
}

export default KawaiiTeddy;