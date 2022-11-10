import React from 'react'
import { Card } from 'antd';
import "./MainProject.css"
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainProject() {
 
 let nav =useNavigate()
  return (
   <div className='MainProject'>
    <div style={{width:"60%",margin:"auto",backgroundColor:"white"}}>
            <div style={{textAlign:"center"}}>
              <h1>My Project</h1>
            </div>
            <div className='bodyPJ-html'>
                <div ><h3>HTML/CSS</h3> </div>
               <div className='bodyPJ-html-main'>
                  <div className='bodyPJ-html-card'>
                          <Card hoverable style={{ width: 240,}}
                          cover={<img alt="example" src="https://www.w3schools.com/w3css/img_temp_band.jpg" />}>
                            <h4>The Band</h4>
                          <Button variant="outline-primary" onClick={()=>{nav("/MainProject/HTML/TheBand")}}>Demo</Button>
                          
                        </Card>
                    </div>
                  <div className='bodyPJ-html-card'>
                          <Card hoverable style={{ width: 240,}}
                          cover={<img alt="example" src="https://www.w3schools.com/w3css/img_temp_cv.jpg" />}>
                                <h4>CVTemplate</h4>
                           <Button variant="outline-primary" onClick={()=>{nav("/MainProject/HTML/CVTemplate")}}>Demo</Button>
                        </Card>
                    </div>
                  <div className='bodyPJ-html-card'>
                          <Card hoverable style={{ width: 240,}}
                          cover={<img alt="example" src="https://www.w3schools.com/w3css/img_temp_portfolio.jpg" />} >
                                <h4>MyPortfolio</h4>
                          <Button variant="outline-primary"onClick={()=>{nav("/MainProject/HTML/MyPortfolio")}}>Demo</Button>
                        </Card>
                    </div>

               </div>
            </div>

    </div>
    </div>
  )
}

export default MainProject