import React from "react";

function Task(props) {
  const { task, onDeleteClick, id } = props;

  return (
    <div className="task">
      <div className="label">
        {task.category ?
          task.category :
          'All'}
      </div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => onDeleteClick(task.text)}>X</button>
    </div>
  );
}

export default Task;
