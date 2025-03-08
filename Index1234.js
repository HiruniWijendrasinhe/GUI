import React, { useState } from "react";
import "./Newform/newform2.css";
function ToDoList() {
  const [task, setTask] = useState([]);
  const [NewTask, setNewTask] = useState("");
  const [NewDate, setNewDate] = useState("");
  const [updatestate, setUpdateState] = useState(-1);
  const [updatedTask, setUpdatedTask] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  
  function HandleInputChange(event) {
    setNewTask(event.target.value);
  }

  
  function HandleDateChange(event) {
    setNewDate(event.target.value);
  }

  
  function HandleEdit(index) {
    console.log("Editing task:", task[index]);
    setUpdateState(index);
    setUpdatedTask(task[index].task);
    setUpdatedDate(task[index].date);
  }

  
  function Add() {
    if (!NewTask || !NewDate) {
      alert("Please fill in both fields!");
      return;
    }

    const newTaskObj = { task: String(NewTask), date: String(NewDate) };
    setTask((prevTasks) => [...prevTasks, newTaskObj]);

    console.log("Task after adding:", newTaskObj);
    setNewTask("");
    setNewDate("");
  }

  
  function Delete(index) {
    const Updated_task = task.filter((_, i) => i !== index);
    setTask(Updated_task);
  }

  
  function SaveUpdate(index) {
    if (!updatedTask || !updatedDate) {
      alert("Please fill in both fields to update the task!");
      return;
    }

    const updatedTasks = [...task];
    updatedTasks[index] = { task: String(updatedTask), date: String(updatedDate) };
    setTask(updatedTasks);
    console.log("Task after updated:", updatedTasks);

    setUpdateState(-1); 
    setUpdatedTask(""); 
    setUpdatedDate(""); 
  }

  
  function CancelEdit() {
    setUpdateState(-1);
    setUpdatedTask(""); 
    setUpdatedDate(""); 
  }

  console.log("Task array before rendering:", task);

  return (
    <div className="Central">
      <h3>To-Do List</h3>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {task.map((item, index) => {
            return updatestate === index ? (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={updatedTask}
                    onChange={(e) => setUpdatedTask(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="datetime-local"
                    value={updatedDate}
                    onChange={(e) => setUpdatedDate(e.target.value)}
                  />
                </td>
                <td>
                  <button style={ {backgroundColor: 'purple' }} onClick={() => SaveUpdate(index)}>Save</button>
                  <button style={ {backgroundColor: 'purple' }} onClick={CancelEdit}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{item.task}</td>
                <td>{item.date}</td>
                <td>
                  <button   style={ {backgroundColor: 'purple' }} onClick={() => Delete(index)}>Delete</button>
                  <button  style={ {backgroundColor: 'purple' }}  onClick={() => HandleEdit(index)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {}
      <div className="Newalign">
        <label htmlFor="taskInput">Task</label>
        <input
          id="taskInput"
          type="text"
          value={NewTask}
          placeholder="Add a task"
          onChange={HandleInputChange}
        />
      </div>

      <div className="Newalign">
        <label htmlFor="dateInput">Date</label>
        <input
          id="dateInput"
          type="datetime-local"
          value={NewDate}
          placeholder="Add a date"
          onChange={HandleDateChange}
        />
      </div>

      <div className="Layout">
        <button  className="Addbutton"  style={ {backgroundColor: 'purple' }}onClick={Add}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
