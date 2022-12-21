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
        // checks if e.target.id is equal to the checked
            // const checkedTodos = checked.map((check, index) => {
            //     index === e ? !check : check
            // })
            // setChecked(checkedTodos)
            setIds(e)
            setChecked(!checked)
            
    }

    const handleClick = (e) => {
        e.preventDefault();
        handleChange(checked)
    }

    return <div className="App">
        <h1>Todos</h1>
        <TodoForm saveTodo={(todoText) => {
            const trimmedText = todoText.trim()

            if(trimmedText.length > 0){
                addTodo(trimmedText)
            }
        }}/>
        <ToDoList todos={todos} deleteTodo={deleteTodo} todoComplete={handleChange} checked={checked}/>
        <TodoChecked todos={todos} todoCheck={checked} todoId={ids} clearList={handleClick}/>
    </div>
}


export default App