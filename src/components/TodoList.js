import React from 'react'

const TodoList = ({ todos }) => {
    return (
        <div className={` rounded ${todos.isCompleted ? 'bg-teal-500' : 'bg-gray-200'}`}>
            <h1 className=' mt-2 p-3 text-2xl font-serif'>{todos}</h1>
        </div>
    )
}

export default TodoList
