"use server"

import { revalidatePath } from "next/cache";

export async function addTodos(formData) {
    const todo = formData.get('todo');
    fetch(`${process.env.API_URL}/api/todos`,
        {
            method: "POST",
            body: JSON.stringify({ todo })
        }
    )
    revalidatePath("/todos")
}

export async function updateTodo(obj) {
    fetch(`${process.env.API_URL}/api/todos`,
        {
            method: "PUT",
            body: JSON.stringify(obj)
        }
    )
    revalidatePath("/todos")
}