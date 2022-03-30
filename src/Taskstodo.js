
export function Taskstodo({taskstodo})
{
    return(
        <div>
        <h1>Tasks todo</h1>
         {taskstodo.map((tsk)=>(
             <p>{tsk.name}</p>
         ))}
        </div>
    )
}