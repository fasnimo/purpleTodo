import React from 'react'

const ToDoList = ({todos, deleteTodo, checked, todoComplete}) => {
    return <div className="todoList">
        {todos.map((todo, index) => (
            <ul key={index.toString()}>
                <input 
                    id={index.toString()} 
                    type="checkbox"
                    defaultChecked={checked} 
                    onChange={(e) => {
                        todoComplete(e.target.id)
                    }}
                />
                {todo}&nbsp;
                <button type="delete" aria-label='Delete' onClick={() => {
                        deleteTodo(index)
                }}>Delete</button>
            </ul>
        ))}
    </div>
    
}

export default ToDoList