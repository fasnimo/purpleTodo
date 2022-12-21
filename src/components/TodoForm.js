import React from 'react'
import useInputState from './useInputState'
import useTodoState from './useTodoState'

function TodoForm({saveTodo}) {
    const {todos} = useTodoState([])
    const id = todos.map((_, index) => index)
    const {value, onChange, reset} = useInputState('')
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            // saveTodo(value)
            saveTodo(value, id)
            reset()
        }}>
                <input
                   id = {id}
                   placeholder="Add todo"
                   onChange={onChange}
                   value={value}
                   name={value}
                />
        </form>
    )
}

export default TodoForm