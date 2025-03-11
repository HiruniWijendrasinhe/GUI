

import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Task from './TaskOP';
import CreateTask from './createData';
import UpdateTask from './updatetask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/'element={<Task/>}></Route>  
        <Route path='/create'element={<CreateTask/>}></Route>
        <Route path='/update/:ID'element={<UpdateTask/>}></Route>
        </Routes>
        </BrowserRouter>
          
        
    </div>
  );
}

export default App;
