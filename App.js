import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import ToDoList from "./Components/Index1234"; // Your ToDoList component
import Loginnew from "./Components/Login";
import Login from "./Components/WebBase"; // Your Login component
import "./Style/newform2.css"; 
import "./Style/login.css"; 
import "./Style/WebBase.css"; // Your styles
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/*Add routes */}
          <Route path="/" element={<Login />} /> {/*add url*/}
          <Route path="/Login" element={<Loginnew />} /> {/*add url*/}
          <Route path="/Index1234" element={<ToDoList />} /> {/*add url*/}
          {/*add more route*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

