import React from 'react'
import "./CVTemplate.css"
function CVTemplate() {
  return (
    <>
             <div class="tong">
        <div class="tong-head">
            <div class="trai">
                <div class="info">
                    <div class="avatar">
                        <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" alt="" />
                    <h3>Jane Doe</h3>
                    </div>
                    
                    <div class="thongtin">
                        <i class="fa-solid fa-briefcase"></i>
                        <p>Designer</p>
                    </div>
                    <div class="thongtin">
                        <i class="fa-solid fa-house"></i>
                        <p>London, UK</p>
                    </div>
                    <div class="thongtin">
                        <i class="fa-solid fa-envelope"></i>
                        <p>ex@mail.com</p>
                    </div>
                    <div class="thongtin">
                        <i class="fa-solid fa-phone"></i>
                        <p>1224435534</p>
                    </div>
    
                </div>
                <div class="skill">
                    <div class="tieude">
                        <i class="fa-solid fa-star-of-life"></i>
                        <p>Skills</p>
                    </div>
                    <p class="text">Adobe Photoshop</p>
                    <div class="khoi">
                        <div class="khoicon">
                            90%
                        </div>
                    </div>
                    <p class="text">Photography</p>
                    <div class="khoi">
                        <div class="khoicon1">
                            80%
                        </div>
                    </div>
                    <p class="text">Illustrator</p>
                    <div class="khoi">
                        <div class="khoicon2">
                           75%
                        </div>
                    </div>
                    <p class="text">Media</p>
                    <div class="khoi">
                        <div class="khoicon3">
                           50%
                        </div>
                    </div>
                    <div class="tieude">
                        <i class="fa-solid fa-star-of-life"></i>
                        <p>Languages</p>
                    </div>
                    <p class="text">English</p>
                    <div class="khoi">
                        <div class="khoicon">
                            <p id="English"></p>
                        </div>
                           
                        </div>
                    <p class="text">Spanish</p>
                    <div class="khoi">
                        <div class="khoicon4">
                            <p id="Spanish"></p>
                        </div>
                        </div>
                    <p class="text">German</p>
                    <div class="khoi">
                        <div class="khoicon5">
                            <p id="German"></p>
                        </div>
                           
                        </div>
    
    
                </div>
                
            </div>
            <div class="phai">
                <div class="kinhnghiem">
                    <div class="head">
                        <i class="fa-solid fa-suitcase"></i>
                        <p>Work Experience</p>
                    </div>
                    <div class="main">
                        <p class="text-main">Front End Developer / w3schools.com</p>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>Jan 2015 -</span><span id="khung">Current</span>
                        <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                    </div>
                    <div class="main">
                        <p class="text-main">Web Developer / something.com</p>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>Mar 2012 - Dec 2014</span>
                        <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
    
                    </div>
                    <div class="main" id="none">
                        <p class="text-main">Graphic Designer / designsomething.com</p>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>Mar 2012 - Dec 2014</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    
                    </div>
    
                </div>
                <div class="hocvan">
    
                    <div class="head">
                        <i class="fa-solid fa-certificate"></i>
                        <p>Education</p>
                    </div>
                    <div class="main">
                        <p class="text-main">W3Schools.com</p>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>Forever</span>
                        <p>Web Development! All I need to know in one place</p>
                    </div>
                    <div class="main">
                        <p class="text-main">London Business School</p>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>2013 - 2015</span>
                        <p>Master Degree</p>
                    </div>
                    <div class="main" id="none">
                        <p class="text-main">School of Coding</p>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>2010 - 2013</span>
                        <p>Bachelor Degree</p>
    
                    </div>
                </div>
            </div>
        </div>
        <div class="bot">
            <p>Find me on social media.</p>
            <span>
                <a href="http://google.com"><i class="fa-brands fa-facebook-f"></i></a>
            </span>
            <span>
                <a href="http://google.com"><i class="fa-brands fa-instagram"></i></a>
            </span>
            <span>
                <a href="http://google.com"><i class="fa-brands fa-twitter"></i></a>
            </span>
            <p>Powered by <a href="http:// w3.css"> w3.css</a></p>
        </div>
    </div>
    </>
  )
}

export default CVTemplate