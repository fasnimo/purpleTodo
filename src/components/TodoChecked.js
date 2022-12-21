import React from 'react';

function TodoComplete({todos, todoCheck, todoId, clearList}){
    return <div className="todoComplete">
        <h3>Completed Todos</h3>
        <button onClick={clearList}>Clear List</button>
        {/* {todos.filter((todo, index) => {
            if(todoId == index) {
                return <ul key={index.toString()}>
                {todo}
            </ul>
            }
        })} */}
        {/* {console.log(todos)} */}
        {todos.map((todo, index) => {
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