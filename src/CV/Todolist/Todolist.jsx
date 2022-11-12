import React from 'react'
import TodolistHeader from "./TodolistHeader"
import Todolistbody from './Todolistbody'
function Todolist() {
  return (
    <div>
       <div> <TodolistHeader></TodolistHeader></div>
       <div> <Todolistbody></Todolistbody> </div>
        
    </div>
  )
}

export default Todolist