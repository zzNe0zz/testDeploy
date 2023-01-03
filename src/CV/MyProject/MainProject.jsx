import React from 'react'
import { Card } from 'antd';
import "./MainProject.css"
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function MainProject() {
  const { Meta } = Card;
 let nav =useNavigate()

  return (
   <div className='MainProject'>
      <div style={{width:"100%",margin:"auto",backgroundColor:"white"}} className="main">
              <div style={{textAlign:"center"}}>
                <h1 style={{ color:"black"}}>My Project</h1>
              
              </div>
             <div style={{margin:"30px 60px"}}>
             <div className='bodyPJ-html'>
                  <div ><h3>HTML/CSS</h3> </div>
                  <p>
                  <hr />
                </p>
                <div className='bodyPJ-html-main'>
                    <div className='bodyPJ-html-card'>
                            <Card hoverable style={{ width: 240,}} className="card"
                            cover={<img alt="example" src="https://www.w3schools.com/w3css/img_temp_band.jpg" />}>
                                <p><hr  className='hr' /></p>
                              <h4>The Band</h4>
                              <Meta  title=" Page thuần HTML/CSS" style={{marginBottom:"10px"}} />
                          <div className='bnt'>
                          <Button variant="outline-primary" onClick={()=>{nav("/MainProject/HTML/TheBand")}} style={{fontSize:"18px",fontWeight:"bold"}}>Demo</Button>
                          </div>
                          </Card>
                      </div>
                    <div className='bodyPJ-html-card'>
                            <Card hoverable style={{ width: 240,}} className="card"
                            cover={<img alt="example" src="https://www.w3schools.com/w3css/img_temp_cv.jpg" />}>
                              <p><hr  className='hr' /></p>
                                  <h4>CVTemplate</h4>
                                  <Meta  title=" Page thuần HTML/CSS" style={{marginBottom:"10px"}} />
                            <div className='bnt'>
                            <Button variant="outline-primary" style={{fontSize:"18px",fontWeight:"bold"}} onClick={()=>{nav("/MainProject/HTML/CVTemplate")}}>Demo</Button>
                            </div>
                            
                          </Card>
                      </div>
                    <div className='bodyPJ-html-card'>
                            <Card hoverable style={{ width: 240,}} className="card"
                            cover={<img alt="example" src="https://www.w3schools.com/w3css/img_temp_portfolio.jpg" />} >
                              <p><hr  className='hr' /></p>
                                  <h4>MyPortfolio</h4>
                                  <Meta  title=" Page thuần HTML/CSS" style={{marginBottom:"10px"}} />
                            <div className='bnt'>
                            <Button variant="outline-primary" style={{fontSize:"18px",fontWeight:"bold"}} onClick={()=>{nav("/MainProject/HTML/MyPortfolio")}}>Demo</Button>
                            </div>
                          </Card>
                      </div>

                </div>
              </div>
              
              <div className='bodyPJ-Reac' style={{marginTop:"30px"}}>
                      <div ><h3>ReactJS</h3> </div>
                 <p>
                  <hr  className='hr' />
                </p>
                      <div style={{paddingTop:"15px"}} className="bodyPJ-Reac-item">
                          <div className='bodyPJ-Reac-todolist'>
                                <Card hoverable style={{ width: 240,}} className="card"
                                cover={<img alt="example" src="https://i.postimg.cc/bvP04b1r/dasz.png" />} >
                                    <p><hr  className='hr' /></p>
                                      <h4 >Todolist</h4>
                                    <div>
                                        <Meta  title=" Chức năng " style={{marginBottom:"10px"}} />
                                    <ul>
                                        <li>Thêm,sửa,xóa </li>
                                        <li>Lọc theo mức độ ưu tiên </li>
                                        <li>Lưu data trong local storage</li>
                                    </ul>
                                    </div>

                                      <div>
                                      <Meta  title=" Page sử dụng " style={{marginBottom:"10px"}} />
                                      <ul>
                                        <li>Antd</li>
                                        <li>Redux</li>
                                      </ul>
                                      </div>
                              <div className='bnt'>
                              <Button variant="outline-primary" style={{fontSize:"18px",fontWeight:"bold"}} onClick={()=>{nav("/MainProject/Todolist")}} >Demo</Button>
                              </div>
                              </Card>
                          </div>

                          <div className='bodyPJ-Reac-todolist'>
                                <Card hoverable style={{ width: 240,}} className="card"
                                cover={<img alt="example" src="https://i.postimg.cc/5x8FD67d/asdasdasfzxc.png" />} >
                                    <p><hr  className='hr' /></p>
                                      <h4 >AppMusic</h4>
                                      <div>
                                        <Meta  title=" Chức năng " style={{marginBottom:"10px"}} />
                                    <ul>
                                        <li>Các chức năng cơ bản audio </li>
                                        
                                    </ul>
                                    </div>
                                      <div>
                                      <Meta  title=" Page sử dụng " style={{marginBottom:"10px"}} />
                                      <ul>
                                        <li>contex</li>
                                        <li>Link git :<br /> <a href="https://github.com/zzNe0zz/Music">https://github.com/zzNe0zz/Music</a></li>
                                      </ul>
                                      </div>
                              <div className='bnt'>
                              <a href="https://cheery-granita-8bc2d4.netlify.app/"><Button variant="outline-primary" style={{fontSize:"18px",fontWeight:"bold"}}  >Demo</Button></a>
                              </div>
                              </Card>
                          </div>

                      </div>
              </div>

             </div>

      </div>
     <div>
       
     </div>
    </div>
  )
}

export default MainProject