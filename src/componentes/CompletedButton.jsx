import React from 'react';

function CompletedButton({ onClick }) {
  return (
    <button className="completeBtn" onClick={onClick}>
      Complete
    </button>
  );
}

export default CompletedButton;