import { addTodos } from '@/actions/todos';
import Form from '@/components/Form';
import TodoList from '@/components/TodoList';
import Link from 'next/link';
import React from 'react'

const Todo = async () => {

    let todo = await fetch(`${process.env.API_URL}/api/todos`, {
        cache: "no-cache"
    });
    todo = await todo.json();

    return (
        <div>
            <h1 className=' text-3xl font-bold text-purple-800 text-center bg-purple-300 p-3'>Todos Page</h1>
            <div className=' mx-[10%]'>

                <Form />
                {
                    todo?.data?.map((todos) => (
                        <TodoList todos={todos.todo} key={todos.id} />
                    ))
                }
            </div>

        </div>
    )
}

export default Todo;
