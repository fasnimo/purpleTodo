import React from 'react';

function TodoComplete({todos, todoCheck, todoId, clearList}){
    return <div className="todoComplete">
        <h3>Completed Todos</h3>
        <button onClick={clearList}>Clear List</button>
        
        {todos.map((todo, index) => {
            console.log("checked",todo)
            console.log("checkedIndex", index)
            console.log("todoId", todoId)
            if(todoCheck === true){
                if(todoId == index){
                return <ul key={index.toString()}>
                    {todo}
                </ul>
                }
            }
        })}
    </div>
}

export default TodoComplete