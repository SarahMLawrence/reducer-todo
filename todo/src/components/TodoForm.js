import React, { useState } from 'react';

const TodoForm = ({ addTask, filterTasks }) => {

  const [newTask, setNewTask] = useState('');

  const handleChanges = e => {
    setNewTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  }

  const handleClear = e => {
    e.preventDefault();
    filterTasks();
  }

  return (
    <div>
      <p className="form">TODO FORM </p>
      <form onSubmit = {handleSubmit}>
        <input
        type="text"
        name="newTask"
        placeholder="ADD TASK"
        value={newTask}
        onChange={handleChanges} />
        <button type="Submit">Add</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  )
}

export default TodoForm;