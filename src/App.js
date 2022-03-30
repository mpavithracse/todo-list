import './App.css';
import { useState } from 'react';
import { ActiveTasks } from './ActiveTask';
import { Taskstodo } from './Taskstodo';
import { AddTasks } from './AddTasks';
import { Switch, Route,Link } from "react-router-dom";
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from 'react-router';
function App() {
  const[Initialtasks, setTasks] = useState([{name:"task1",isactive : false}]);
  const[active,SetActive] = useState([]);
  const[todo,SetTodo] = useState([])
  const history = useHistory();
  
  const tasksactive = Initialtasks.filter(t=>t.isactive===true) 
  const todotasks = Initialtasks.filter(t=>t.isactive===false)
  
  return (   
    <div className="App">            
        <AppBar position="static">
        <Toolbar className="toolbar">
          <Button onClick={()=>history.push('/AddTasks')} size='large' aria-label='AddTasks' color = 'inherit' >AddTasks  </Button>
          <Button onClick={()=>history.push('/Activetasks')} size='large'  aria-label='Activetasks' color = 'inherit'>Activetasks  </Button>
          <Button onClick={()=>history.push('/Tasktodo')} size='large'   aria-label='Tasktodo' color = 'inherit'>Tasktodo  </Button>
        </Toolbar>
        </AppBar>      
        <Switch>
        <Route path="/Activetasks">
        <ActiveTasks atvTasks={tasksactive}  /> 
        </Route>       
        <Route path = "/Tasktodo">
        <Taskstodo taskstodo = {todotasks}/> 
        </Route>
        <Route path = "/AddTasks">
        <div>
        <AddTasks tasks={Initialtasks} setTasks = {setTasks} /> 
        </div>
        </Route>        
        <Route path = "/**">
        <div>
          <Notfound/>
        </div>
        </Route>
        </Switch>
      </div>
  );

}
function Notfound() {
  
  return(
    <img  width ="100%" height = "100%"
    src = "https://previews.123rf.com/images/monuttanit/monuttanit1808/monuttanit180800002/105734861-404-error-page-not-found-vector-with-donut-graphic.jpg"/>
  )
}


export default App;
