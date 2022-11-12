import React from 'react'
import { Input ,Col,Select  ,Row ,Button,message  } from 'antd';
import {  useDispatch } from 'react-redux'
import { useState ,useRef } from 'react';
import {addTodolist} from "../Redux/slice"
import { v4 as uuidv4 } from 'uuid';

function TodolistHeader() {
  const dispatch = useDispatch()
  let [select,setSelect] = useState("Trung Bình")
  let [nameTodo,setNameTodo]= useState()
 
    const handleChange = (value) => {
      setSelect(value)
  };
 function inputValue (){
  let value = document.querySelector(".input").value
  setNameTodo(value)
 }
function addData(){
  
 if(nameTodo.length === 0){
  message.error('Nhap ten cong viec')
 } 
 else{
  dispatch(addTodolist({
    id : uuidv4(),
    nameTodo : nameTodo,
    statusTodo :  select,
    decrepTion : false,
  }))
  setNameTodo("")
 }
    
    
}
  return (
    <div>
      
        <div className='header-todo' style={{letterSpacing:"10px",textAlign:"center" ,marginBottom:"20px"}}>
            <h1>
              <span>To</span>
              <span>do</span>
              <span>list</span>
            </h1>
       </div>
       <div>
                <Row>
                <Col span={18}>  <Input size="middle" value={nameTodo} placeholder="Nhập tên việc cần làm " className="input" onChange ={inputValue}  /> </Col>
           <Col span={2}>

           <Select defaultValue="Trung Bình" style={{width: 120,marginLeft:"10px"}} onChange={handleChange}
                    options={[
                      {  value: 'Cao',label: 'Cao',},
                      {value: 'Trung Bình',label: 'Trung Bình',},
                      {value: 'Kém',label: 'Kém',}, ]}
    /> 
            </Col>
            <Button type="primary" style={{marginLeft:"30px"}} onClick={addData}>Add</Button>
                </Row>
            </div>
    </div>
  )
}

export default TodolistHeader