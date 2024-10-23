import React from 'react'

const TodoList = ({ todos }) => {
    return (
        <div className={` flex my-2 p-2 mx-auto rounded ${todos.isCompleted ? 'bg-teal-500' : 'bg-gray-200'}`}>
            <h1 className=' flex flex-grow mt-2 text-2xl font-serif'>{todos}</h1>
            <button className=' bg-fuchsia-300 text-sm border-2 px-3 rounded-md'>{!todos.isCompleted? "Done" : "Not Done"}</button>
            <button className=' bg-green-300 text-sm border-2 px-3 rounded-md'>Edit</button>
            <button className=' bg-red-300 text-sm border-2 px-3 rounded-md'>Delete</button>
        </div>
    )
}

export default TodoList
