import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/WebBase.css"; 

function Loginnew() { 
  const navigate = useNavigate(); 

  return (
    <div className="container">
      
      <div className="Logo">
        <img
          src="../images/TaskGen-removebg-preview.png"
          width="100"
          height="100"
          alt="Task management "
          style={{ margin: "0" }}
        />
        <div className="divide">
          <h1 id="page-title">
            Select the category where your data belongs! <br />
            Because every great plan starts with the right organization!
          </h1>
          <img
            src="../images/Topic-removebg-preview.png"
            id="special"
            alt="taskmanagement in toolbar"
          />
        </div>
      </div>

      
      <div className="first">
        
        <div className="dropdownitem work" onClick={() => navigate("/Index1234")}>
          <div className="new">
            <h2>Work</h2>
            <p>
              Manage your tasks and projects efficiently. Add meeting days, new
              projects, and goals to your to-do list.
            </p>
            <img
              src="../images/meeting123-removebg-preview.png"
              alt="working in a company"
            />
          </div>
        </div>

     
        <div
          className="dropdownitem home"
         // onClick={() => navigate("/home")} 
        >
          <div className="new">
            <h2>Home</h2>
            <p>
              Stay on top of your daily life: Track bill payment days, special
              occasions.
            </p>
            <img src="../images/home-removebg-preview.png" alt="home category"  />
          </div>
        </div>

       
        <div
          className="dropdownitem academic"
         // onClick={() => navigate("/academic")}
        >
          <div className="new">
            <h2>Time Alert</h2>
            <p>Plan your day with a structured timetable, and set your daily routine.</p>
            <img src="../images/studying-removebg-preview.png" alt="academic category" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginnew;
