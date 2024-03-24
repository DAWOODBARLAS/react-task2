import React from 'react';

function DeleteButton({ onClick }) {
  return (
    <button className="deleteBtn" onClick={onClick}>
      Delete
    </button>
  );
}

export default DeleteButton;