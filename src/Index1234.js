import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Newform/newform2.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");
  const [editDate, setEditDate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/tasks") 
      .then(response => setTasks(response.data))
      .catch(error => {
        console.error("Error fetching tasks:", error);
        alert("There was an issue fetching tasks. Please try again later.");
        
      });
  }, []);

  const addTask = () => {
    if (taskInput === "" || dateInput === "") {
      alert("Please fill in both task and date.");
      return;
    }

    const newTask = { task: taskInput, date: dateInput };
    axios.post("http://localhost:5000/tasks", newTask)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error("Error adding task:", error));

    setTaskInput("");
    setDateInput("");
  };

  const updateTask = () => {
    if (editTask === "" || editDate === "") {
      alert("Please fill in both task and date.");
      return;
    }

    const updatedTask = { task: editTask, date: editDate };
    axios.put(`http://localhost:5000/tasks/${editIndex}`, updatedTask) 
      .then(response => {
        setTasks(tasks.map(task => task.id === editIndex ? { ...task, task: editTask, date: editDate } : task));
        setEditIndex(null);
        setEditTask("");
        setEditDate("");
      })
      .catch(error => {
        console.error("Error updating task:", error);
        alert("There was an issue updating the task. Please try again later.");
      });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`) 
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(error => {
        console.error("Error deleting task:", error);
        alert("There was an issue deleting the task. Please try again later.");
      });
  };

  return (
    <div className="task-manager">
      <h2>Task Management</h2>

      <div className="task-input">
        <input type="text" placeholder="Task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        <input type="date" value={dateInput} onChange={(e) => setDateInput(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <h3>Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No tasks available
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.task}</td>
                <td>{new Date(task.date).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => {
                    setEditIndex(task.id);
                    setEditTask(task.task);
                    setEditDate(task.date);
                  }}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {editIndex && (
        <div className="edit-form">
          <h3>Edit Task</h3>
          <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
          <input type="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
          <button onClick={updateTask} style={{ backgroundColor: "rgb(102, 29, 100)" }}>
            Update Task
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskManager;
