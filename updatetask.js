import React,{useState }from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function UpdateTask() {

  const [task,setTask]=useState([])
  const [date,setDate]=useState('')
  const{ID}=useParams();
  const navigate=useNavigate();
  function handleSubmit(event){
      event.preventDefault();
      const formattedDate = date.replace("T", " ") + ":00";
      console.log("Task:", task);
       console.log("Date:", formattedDate);
       axios.put(`http://localhost:8080/update/${ID}`, { task, date: formattedDate })

      .then(res=>{
          console.log(res);  
          navigate('/');
        })
      .catch(err=>console.log(err));
      
      
  }


  return (
    <div className="container">
       <div className="taskbox">
        <form onSubmit={handleSubmit}>
            <h2>
                Update Task
            </h2>
            <div className="ajust">
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Enter the task' className="formcontrol" onChange={e=>setTask(e.target.value)}/>

            </div>
            <div className="ajust">
                <label htmlFor="">Date</label>
                <input type="datetime-local" placeholder='Enter date' className="formcontrol" onChange={e=>setDate(e.target.value)}/>

            </div>
            <button className="Sub">Update</button>
        </form>
        </div> 
      
       
        
    </div>
  );
}
export default UpdateTask;

