import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

export default function TodoList() {
   
    const [todos, setTodos] = useState([{id: 1, text: "Learn Vue"}])
    
    function addTodo(value)
    {
        setTodos((prevTodos)=>([...prevTodos, {id: prevTodos.length+1, text:value}]))
    }

  return (
    <>
        <TodoForm onSubmit={addTodo} />
        <ul>
            {todos.map((item, index) => <TodoItem todoItem={item} key={index} /> )}
        </ul>
    </>
  )
}
