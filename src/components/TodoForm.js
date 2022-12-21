import React from 'react'
import useInputState from './useInputState'

function TodoForm({saveTodo}) {
    const {value, onChange, reset} = useInputState('')

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            saveTodo(value)
            reset()
        }}>
                <input
                   id = {value}
                   placeholder="Add todo"
                   onChange={onChange}
                   value={value}
                   name={value}
                />
        </form>
    )
}

export default TodoForm