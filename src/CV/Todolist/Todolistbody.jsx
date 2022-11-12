import React from 'react'
import { Space, Table, Tag ,Button,Modal,Input,Col,Row,Select,Popconfirm } from 'antd';
import 'antd/dist/antd.css';
import { useSelector,useDispatch } from 'react-redux'
import {deleTodo,fixData,success} from "../Redux/slice"
import {useState} from "react"
import "./TodolistHeader.css"
function Todolistbody() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valueIndex,setValueIndex] = useState()
  const [defaultSelect,setDefaulSelect] = useState()
  const [getID,setGetID] = useState()
  let  dataTodo = useSelector((state)=>{return state.todoList })
  
  let dispatch = useDispatch()
  const showModal = () => {
    setIsModalOpen(true);
    
  };

  
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(fixData({
      id : getID,
    nameTodo : valueIndex,
    statusTodo :  defaultSelect,
    }))
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    
  };
  const handleChange = (value) => {
    setDefaulSelect(value)
  };
  function inputValue (){
    let value = document.querySelector(".inputbody").value
    setValueIndex(value)
   };
  
  const columns = [
    { title: 'Name',dataIndex: 'nameTodo',key: 'nameTodo',
      render: (_,text) => {
        let color = ""
          if(text.decrepTion === true){
            color = "#b7eb8f "
          }
          
          return(
            <p style={{background:color}} > {_}</p>
          )
      }
    },
    { title: 'Status', key: 'Status', dataIndex: 'statusTodo',
      render: (_,value ) => {
        let color = ""
        
        if (value.statusTodo === 'Cao') {
          color = 'red';
        }
        if (value.statusTodo === 'Trung Bình') {
          color = 'green';
        }
        if (value.statusTodo === 'Kém') {
          color = 'gray';
        }
        
        return(
          <Tag color={color} key={value.id}  >
            {value.statusTodo}
          </Tag>
        )
      },
      filters: [
        {
          text: 'Trung Bình',
          value: 'Trung Bình',
        },
        {
          text: 'Kém',
          value: 'Kém',
        },
        {
          text: 'Cao',
          value: 'Cao',
        },
      ],
      onFilter: (value, record) => {
        
        return record.statusTodo === value
      } 
    },
    { title: 'Action',key: 'action',
      render: (_, value) => (
        <Space size="middle" key={value.id}>
         <Button type="primary" style={{marginLeft:"30px"}} onClick={()=>{dispatch(success(value))}}>Hoàn Thành</Button>
        
         <Button type="primary" style={{marginLeft:"30px"}} 
                    onClick={()=>{showModal(); setValueIndex(value.nameTodo); setDefaulSelect(value.statusTodo);setGetID(value.id)}}> Sửa</Button>

            <Popconfirm title="Sure to delete?" onConfirm={()=>{dispatch(deleTodo(value.id))}}>
                <Button type="primary" style={{marginLeft:"30px"}}> Xóa</Button>
          </Popconfirm>   
         
        </Space>
      ),
    },
  ];
  
  return (
    <>  
        
          {
            dataTodo.length !== 0 ?<Table columns={columns} dataSource={dataTodo} style={{width:"100%"}} className="tb-todo"/>:
            <p style={{textAlign:"center",fontSize:"30px",fontWeight:"bold"}}>Nothing to do</p>
          }

          <div>
       
      <Modal title="Sửa Thông Tin Công Việc" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Row>
                <Col span={18}>  <Input size="middle"  className="inputbody" value={valueIndex}  onChange={inputValue}/> </Col>
              
           <Col span={2}>

           <Select value={defaultSelect} style={{width: 120,marginLeft:"10px"}} onChange={handleChange}
                    options={[
                      {  value: 'Cao',label: 'Cao',},
                      {value: 'Trung Bình',label: 'Trung Bình',},
                      {value: 'Kém',label: 'Kém',}, ]} /> 
            </Col>
            
                </Row>
      </Modal>
          </div>
    </>
  )
}

export default Todolistbody