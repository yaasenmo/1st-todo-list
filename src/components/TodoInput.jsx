import React, { useState } from 'react'

export default function TodoInput(props) {
 const {handleAddtodos, todoValue, setTodoValue} = props
 


  return (
    <header>
      <input value={todoValue} onChange={(e)=>{
        setTodoValue(e.target.value)
      }} placeholder='Enter what you want to do...'/>
    <button onClick={() =>{
      handleAddtodos(todoValue)
      setTodoValue('')
    }}>Add</button>
    </header>
      
    
  )
}
