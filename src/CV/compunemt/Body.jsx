import React from 'react'
import "./body.css"
import {ScheduleOutlined,PhoneOutlined,MailOutlined,HomeOutlined} from "@ant-design/icons"
import {useNavigate} from "react-router-dom"
function Body() {
    let nav = useNavigate()

  return (
    <div className='Body'>
        <div className='Body-top'>
            <div className='Body-top-img'>
                <img src="https://lh3.googleusercontent.com/a/ALm5wu1vZbXI0nerud76X757If0_W7hV_LaMdNtvKsqYtQ=s288-p-rw-no" alt="" />
            </div>
            <div className='Body-top-text'> 
                    <h3><span>Nguyễn</span> <span>Tiến</span> <span>Hoàng</span></h3>
                    <p> Intern Front-end</p>
            </div>
        </div>
        <div className='Body-mid'>
            <div className='Body-mid-top'>
                <div  className='Body-mid-top-left'>
                        <div className='Body-mid-top-left-title'><h4>Thông tin liên hệ</h4></div>
                        <div className='Body-mid-top-left-info'>
                               <p> <span className='icon'><ScheduleOutlined /></span> <span> 11/08/1995</span></p>
                               <p><span className='icon'><PhoneOutlined /> </span><span>0898511895</span></p>
                               <p><span className='icon'><MailOutlined /></span> <span>zzhoangzz1995@gmail.com</span></p>
                               <p><span className='icon'><HomeOutlined /></span> <span>141/150 giáp nhị Hoàng mai Hà Nội</span></p>
                        </div>
                </div>
                <div className='Body-mid-top-right'>
                        <p>Học vấn</p>
                     <p>Học viện quản lý giáo dục</p>
                     <p>Chuyên ngành : Công nghệ thông tin</p>
                     <p>Tốt nghiệp loại Trung Bình Khá</p>
                </div>
            </div>
            <div className='Body-mid-bot'>
                        <div  className='Body-mid-top-left'>
                                    <div className='Body-mid-bot-left-title'><h4>Các kỹ năng</h4></div>
                                    <div className='Body-mid-top-left-info'>
                                    <ul className='list-info'>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScrip</li>
                                            <li>React JS</li>
                                            <li>Redux</li>
                                            <li>Antd </li>
                                            <li>boottrap</li>
                                    </ul>
                                    </div>
                            </div>
                        <div className='Body-mid-top-right'>
                            <p>Kinh nghiệm làm việc</p>
                            <p>Học và thực hành tại nodemy từ 5/2022</p>
                            <p>Dự án tham gia : <br />
                                <span>Clone shopee bằng API : <a href="https://shope-b3.thaihm.site/">https://shope-b3.thaihm.site</a></span> <br />
                                <span>Tham gia làm hearder và fillter sản phẩm theo tên,giá,hãng </span><br />
                                <span>bằng URL </span> <br />
                                <span>Link git : <a href="https://github.com/thaihmcsp/b3-project">https://github.com/thaihmcsp/b3-project</a></span><br />
                                <span>Nhánh:hoang</span>
                            </p>
                            <p >Dự án cá nhân : <span style={{textDecoration:"underline",cursor:"pointer"}} onClick={()=>{nav("/MainProject")}}>My Project</span> <br />
                                <span>Link github : <a href="https://github.com/zzNe0zz/testDeploy">https://github.com/zzNe0zz/testDeploy</a></span>
                            </p>
                            
                        </div>
                </div>

        </div>
        <div className='Body-bot'></div>
    </div>
  )
}

export default Body