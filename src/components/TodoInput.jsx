import React from 'react'

export default function TodoInput(props) {
 const {handleAddtodos, todoValue, setTodoValue} = props
 


  return (
    <header>
      <input value={todoValue} onChange={(e)=>{
        setTodoValue(e.target.value)
      }} placeholder='Enter todo list...'/>
    <button onClick={() =>{
      handleAddtodos(todoValue)
      setTodoValue('')
    }}>Add</button>
    </header>
      
    
  )
}
