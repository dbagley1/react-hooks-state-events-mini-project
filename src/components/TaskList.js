import React, { useEffect, useState } from "react";
import Task from "./Task.js";

function TaskList(props) {
  const { tasks, setTasks, selectedCategory } = props;
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    setFilteredTasks(tasks.filter(task => task.category === selectedCategory || selectedCategory === "All"));
  }, [selectedCategory, tasks]);

  function handleDelete(id) {
    const newTasks = tasks.filter((task, i) => task.text !== id);
    setTasks(newTasks);
  }

  return (
    <div className="tasks">
      {filteredTasks.map((task, i) => (
        <Task key={task.text} task={task} id={i} onDeleteClick={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
