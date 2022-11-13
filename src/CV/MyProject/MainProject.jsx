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
              <h1 style={{ color:"white"}}>My Project</h1>
             
            </div>
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
            
            <div className='bodyPJ-Reac'>
                    <div ><h3>ReactJS</h3> </div>
                    <p>
                <hr  className='hr' />
              </p>
                    <div style={{paddingTop:"15px"}}>
                        <div className='bodyPJ-Reac-todolist'>
                              <Card hoverable style={{ width: 240,}} className="card"
                              cover={<img alt="example" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/312358470_914993322805955_337605724562053215_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ej5_wiaAKQsAX8RrChh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdStLj4K66b0RJV2uUG2AKlBeEnvtg5OeXT2jDTn--Um6w&oe=6396CDA1" />} >
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
                    </div>
            </div>

    </div>
    </div>
  )
}

export default MainProject