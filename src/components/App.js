import React, {useState}from 'react'
import TodoForm from './TodoForm'
import ToDoList from './ToDoList'
import TodoChecked from './TodoChecked';
import useTodoState from './useTodoState'

function App() {
    const {todos, addTodo, deleteTodo} = useTodoState([])
    const [checked, setChecked] = useState(false)
    const [ids, setIds] = useState()

    const handleChange = (e) => {
            setIds(e)
            setChecked(!checked)    
    }

    const handleClick = (e) => {
        e.preventDefault();
        handleChange(checked)
    }

    return <div className="App">
        <h1>Todos</h1>
        <TodoForm saveTodo={(todoText, id) => {
            const trimmedText = todoText.trim()

            if(trimmedText.length > 0){
                addTodo(trimmedText, id)
            }
        }}/>
        <ToDoList todos={todos} deleteTodo={deleteTodo} todoComplete={handleChange} checked={checked}/>
        <TodoChecked todos={todos} todoCheck={checked} todoId={ids} clearList={handleClick}/>
    </div>
}


export default App