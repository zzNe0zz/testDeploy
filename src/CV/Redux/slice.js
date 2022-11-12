import { createSlice } from '@reduxjs/toolkit'


let getData = localStorage.getItem('todoList')?JSON.parse(localStorage.getItem('todoList')):[]

const init = {
  todoList:getData,
}
export const counterSlice = createSlice({
    name: 'Todolist',
    initialState: init,
    reducers: {
        addTodolist: (state ,actions ) => {
          
          state.todoList.push(actions.payload) ;
          localStorage.setItem("todoList",JSON.stringify( state.todoList ))
        },
        deleTodo : (state  ,actions ) => {
           
          state.todoList = state.todoList.filter((value)=>{return value.id != actions.payload})
          localStorage.setItem("todoList",JSON.stringify( state.todoList ))
        },
        fixData : (state  ,actions ) => {  
          state.todoList = state.todoList.map((value)=>{
            if(value.id === actions.payload.id){
              value.nameTodo = actions.payload.nameTodo;
              value.statusTodo = actions.payload.statusTodo
            }
            else {
              return value
            }
            return value
          })
          localStorage.setItem("todoList",JSON.stringify( state.todoList ))
        },
        success : (state  ,actions ) =>{
          state.todoList = state.todoList.map((value)=>{
           console.log(actions);
           if(value.id === actions.payload.id){
            value.decrepTion = true
           }
           return value
          })
        }
      }
    })
    export default counterSlice.reducer
    export const { addTodolist ,deleTodo,fixData,success} = counterSlice.actions
