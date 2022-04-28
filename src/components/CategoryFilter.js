import React from "react";

function CategoryFilter(props) {
  const { categories, selectedCategory, setSelectedCategory, tasks } = props;

  function handleClick(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, i) => (
        <button
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleClick(category)}
          key={i}
        >
          {category}

          {(tasks.filter(task => task.category === category).length > 0) ?
            <span className="badge"> ({tasks.filter(task => task.category === category).length})</span> :
            null}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
