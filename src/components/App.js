import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function addNewTask(task) {
    setTasks([...tasks, task]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} tasks={tasks} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm onTaskFormSubmit={addNewTask} categories={categories} />
      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
