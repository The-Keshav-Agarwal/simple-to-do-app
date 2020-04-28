import React from 'react';
import remove from './remove.png';
const Display =({todos,deleteTodo})=>{
    const todolist = todos.map(todo=>{
        return (
            
            <div key={todo.id} className="displaytodo">
            <div className="dtodo">{todo.todo}</div>
            <div> <img src={remove} className="remove" alt="delete" title="remove this task" onClick={()=>{deleteTodo(todo.id)}}></img></div>
            </div>
        )
    })
        return(
            <div>
                {todolist}
            </div>
        )
}
export default Display;