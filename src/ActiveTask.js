
export function ActiveTasks({atvTasks})
{

    return(
        <div>
        <h1>Active tasks</h1>
         {atvTasks.map((tsk)=>(
             <p>{tsk.name}</p>
         ))}
        </div>
    )
}