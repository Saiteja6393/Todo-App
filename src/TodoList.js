import React from 'react'

const TodoList = ({todoslist,deleteHandler}) => {
  return (
    <div>
      {todoslist.map((todo,index)=>
      <div key={index}>
          <h5>{todo} &nbsp; <button className='btn' onClick={()=> deleteHandler(index)}>Delete</button></h5>
      </div>)}
    </div>
  )
}

export default TodoList
