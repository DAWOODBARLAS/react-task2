// TaskItem.js
import React from 'react';
import EditButton from './EditButton';
import CompletedButton from './CompletedButton';
import DeleteButton from './DeleteButton';

function TaskItem({ task, onEdit, onComplete, onDelete }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      {task.text}
      <EditButton onClick={onEdit} />
      <CompletedButton onClick={onComplete} />
      <DeleteButton onClick={onDelete} />
    </li>
  );
}

export default TaskItem;
