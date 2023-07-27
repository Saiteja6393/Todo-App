import React from 'react'
import { auth } from './config/firebase'
import { useState } from "react";
import TodoList from "./TodoList";


const Home = ({presentUser}) => {
    const [task,setTask]=useState("");
const [todos,setTodos]=useState([]);
const changeHandler=e=>{
  setTask(e.target.value)
}
const submitHandler=e=>{
  e.preventDefault();
  const newList=[...todos,task];
  setTodos(newList);
  setTask("");
  
}
const deleteHandler=(indexValue)=>{
  const newList=todos.filter((todo,index)=>index!==indexValue);
  setTodos(newList);
}

  return (
    <div>
      <center>
        <h3>Welcome {presentUser.email}</h3>
        <div className='card'>
          <div className='card-body'>
            <h3 className='card-title'>Todo App</h3>
            <form onSubmit={submitHandler}>
              <input className='form' type='text' name='task' value={task} onChange={changeHandler}/>&nbsp;
              <input className='add' type='submit' value='Add' name='add'/>
            </form>
            <TodoList todoslist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
       </center>
        <center>
        <button onClick={()=>auth.signOut()} className='btnn'>SignOut</button>
      </center>
    </div>
  )
}

export default Home
