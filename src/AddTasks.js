import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

export function AddTasks({tasks,setTasks})
{
    const[taskname,setTaskname]= useState("");
    const[checked, setChecked] = useState(false)
    const handleOnChange = (t,e) => {  
        t.isactive =  e.target.checked;
        setChecked(t.isactive);
    };

    const addtasktoList = (name) =>{
        const newtask = {
          name : name,
          isactive : false
        }       
        setTasks([...tasks,newtask])
    };
  
    

    return(
        
        <div className="addtaskcontainer">
        <h1>Add Tasks</h1>
        <input type="text"
        onChange={(event) => setTaskname(event.target.value)} 
        />
        <Button variant="contained"
        onClick={() => addtasktoList(taskname)}>AddTask</Button><br/>  
        <FormGroup>
        {tasks.map((tsk) => (            
         <label>              
        <FormControlLabel control={<Checkbox 
        checked = {tsk.isactive}
        onChange={(e)=>handleOnChange(tsk,e)}
        inputProps={{ 'aria-label': 'controlled' }}
        value = {tsk.name}
        />}label={tsk.name} />                   
        </label>       
       ))}
       </FormGroup>  
        </div>
    )
}