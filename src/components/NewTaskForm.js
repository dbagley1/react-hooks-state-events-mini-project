import React from "react";

function NewTaskForm(props) {
  const [text, setText] = React.useState("");
  const [category, setCategory] = React.useState("");
  const { onTaskFormSubmit, categories } = props;

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={event => setText(event.target.value)} value={text} />
      </label>
      <label>
        Category
        <select name="category" onChange={event => setCategory(event.target.value)} value={category}>
          {categories.map((category, i) => (
            <option key={i} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
