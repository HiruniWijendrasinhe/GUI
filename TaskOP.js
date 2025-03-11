import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Task.css"; 

function Task() {
    const [Task, setTask] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/")
            .then(res => setTask(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (ID) => {
        try {
            await axios.delete(`http://localhost:8080/todolist/${ID}`);
            setTask(Task.filter(task => task.ID !== ID)); 
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="task-container">
            <div className="task-box">
                {/* Header and Add Button */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="text-dark">Task List</h3>
                    <Link to="/create" className="Add">
                        Add+
                    </Link>
                </div>

                {/* Table */}
                <div className="table-responsive">
                    <table className="table task-table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Task.length > 0 ? (
                                Task.map((data) => (
                                    <tr key={data.ID}>
                                        <td>{data.task}</td>
                                        <td>{data.date}</td>
                                        
                                      
                                       
                                        <td className="task-cell">
    <div className="task-buttons">
        <Link to={`/update/${data.ID}`} className="btx">Update</Link>
        <button onClick={() => handleDelete(data.ID)} className="bty">Delete</button>
    </div>
</td>

                                            
                                            
                                      
                                       
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-muted">No tasks available.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Task;
