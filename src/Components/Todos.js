import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
    
  return (
    <div className='container my-5'>
        <h2 className='text-center'>To do LIST</h2>
       {props.todo.length===0?<div class="alert alert-primary" role="alert">
  List is empty !! Add to view
</div>:
        props.todo.map((todo) => {return  <TodoItem todo= {todo} key={todo.sno} onDelete={props.onDelete}/> } ) }  
      
    </div>
  )
}

export default Todos
