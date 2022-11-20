import { useState } from 'react'

export default function TodoForm({onSubmit}) {
  const [todoValue, setTodoValue] = useState("")

  function handleSubmit(e)
  {
    e.preventDefault()
    onSubmit(todoValue)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={todoValue} onInput={(e)=>setTodoValue(e.target.value)} />
        <button type="submit">Add Todo</button>
    </form>
  )
}
