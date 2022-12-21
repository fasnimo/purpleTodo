import {useState} from 'react'

export default (initialValue) => {
    const [todos, setTodos] = useState(initialValue)
    
    return {
        todos, 
        addTodo: (todoText, id) => {
            console.log("length", todos)
            // setTodos([...todos, id])
            setTodos([...todos, todoText])
            // setTodos([...todos, {id: id, name: todoText, complete: false}])
        },
        deleteTodo: (todoIndex) => {
            const newTodos = todos.filter((_, index) => index != todoIndex)
            setTodos(newTodos)
        }
    }
}