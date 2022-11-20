import React from 'react'

export default function TodoItem({todoItem}) {
  return (
    <li>
        {todoItem.text}
    </li>
  )
}
