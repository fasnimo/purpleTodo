import {useState} from 'react'
// import _list from '../data/list'

export default (initialValue) => {
    const [todos, setTodos] = useState(initialValue)

    return {
        todos, 
        addTodo: (todoText) => {
            console.log("todosState", todos)
            setTodos([...todos, todoText])
        },
        deleteTodo: (todoIndex) => {
            const newTodos = todos.filter((_, index) => index != todoIndex)
            setTodos(newTodos)
        }
    }
}