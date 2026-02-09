import React, { useState } from 'react';
import "./toDoList.css";

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;

    // A more robust way might be to use an object with a unique ID
    // setItems([...items, { id: Date.now(), name: inputValue }]);
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
  <div className="todoListContainer">
    <h2 className="listTitle">List Items:</h2>

    <div className="listArea">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    <form onSubmit={handleAddItem}>
      <div className="inputSection">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new item"
          className="inputText"
        />
        <button type="submit">Add to List</button>
      </div>
    </form>
  </div>
);
}

export default TodoList;
