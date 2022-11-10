import React from 'react'
import "./TheBand.css"
function TheBand() {
  return (
    <div>
                <div className='Ne0-TheBand'>
        <div className="TheBand-head">
            <div className="TheBand-head-left">
                <div className='TheBand-head-left-hover'>Home</div>
                <div className='TheBand-head-left-hover'>Band</div>
                <div className='TheBand-head-left-hover'>Tour</div>
                <div className='TheBand-head-left-hover'>Contact</div>
                <div class="TheBand-more">More<i class="fa-solid fa-caret-down"></i>
                    <ul class="TheBand-more-list">
                        <li>Merchandise</li>
                        <li>Extra</li>
                        <li>Media</li>
                    </ul>
                
                </div>
            </div>
            <div class="TheBand-head-right"><i class="fa-solid fa-magnifying-glass"></i>
               
            </div>
        </div>
        <div class="TheBand-banner">
            <img src="https://www.w3schools.com/w3images/chicago.jpg" alt="" />
            <div class="TheBand-baner-text">
                <h4 >Chicago </h4>
                <p >We had the best time playing at Venice Beach!</p>
            </div>
        </div>
         <div class="TheBand-about">
            <div class="TheBand-about-main">
                <h1 >THE BAND</h1>
                <p >We love music</p>
                <p >We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div class="TheBand-about-avatar">
                    <div class="TheBand-about-avatar-list">
                        <p >Name</p>
                        <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt=""/>
                    </div>
                    <div class="TheBand-about-avatar-list">
                        <p>Name</p>
                        <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt=""/>
                    </div>
                    <div class="TheBand-about-avatar-list">
                        <p>Name</p>
                        <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="TheBand-tour">
              <div class="TheBand-tour-main">
                  <h4 >TOUR DATES</h4>
                  <p id='TheBand-tour-main-p'> Remember to book your tickets!</p>
                  <div class="TheBand-tour-main-box">
                      <div class="TheBand-september">
                          <p>September </p>
                          <span>Sold out</span>
                      </div>
                      <div class="TheBand-september">
                            <p>October </p>
                            <span>Sold out</span>
                        </div>
                        <div class="TheBand-octember">
                            <p>October</p>
                            <span>3</span>
                        </div>
                  </div>
                  <div class="TheBand-tour-main-address">
                      <div class="TheBand-address">
                          <img src="https://www.w3schools.com/w3images/newyork.jpg" alt=""/>
                          <div class="TheBand-address-mini">
                            <h5>New York</h5>
                            <p id="p">Sat 28 Nov 2016</p>
                            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button >Buy Tickets</button>
                          </div>

                      </div>
                      <div class="TheBand-address">
                        <img src="https://www.w3schools.com/w3images/paris.jpg" alt=""/>
                        <div class="TheBand-address-mini">
                            <h5>Paris</h5>
                        <p id="p">Fri 27 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button >Buy Tickets</button>
                        </div>

                    </div>
                    <div class="TheBand-address">
                        <img src="https://www.w3schools.com/w3images/sanfran.jpg" alt=""/>
                       <div class="TheBand-address-mini">
                            <h5>San Francisco</h5>
                            <p id="p">Fri 27 Nov 2016</p>
                            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button >Buy Tickets</button>

                       </div>
                    </div>
                  </div>

              </div>
          </div>  
            <div class="TheBand-contact">
              <div class="TheBand-contact-main">
                 <div className="TheBand-contact-main-text">
                        <h3>CONTACT</h3>
                        <p >Fan? Drop a note!</p>
                 </div>
                  <div className="TheBand-contact-main-box">
                      <div className="TheBand-box-left">
                          <p><i className="fa-solid fa-location-dot"></i> <span>Chicago, US</span></p>
                          <p><i className="fa-solid fa-phone-flip"></i><span>Phone: +00 151515</span></p>
                          <p><i className="fa-solid fa-envelope"></i><span> Email: mail@mail.com</span></p>
                      </div>
                      <div className="TheBand-box-right">
                          <div className="TheBand-right-top">
                              <input type="text" name="" id="" placeholder="Name"/>
                              <input type="email" placeholder="Email" />
                          </div>
                          <div className="TheBand-right-bot">
                              <input type="text" placeholder="Message"/>
                          </div>
                      </div>
                  </div>
                    <div className="TheBand-contact-main-nut">
                        <button>
                            SEND
                        </button>
                    </div>
                </div>
          </div>
         <div className="TheBand-end">
              <img src="https://www.w3schools.com/w3images/map.jpg" alt=""/>
              <div className="TheBand-end-link">
                  <button><i className="fa-brands fa-facebook"></i></button>
                  <button><i className="fa-brands fa-instagram"></i></button>
                  <button><i className="fa-brands fa-twitter"></i></button>
                  <button><i className="fa-brands fa-linkedin-in"></i></button>

                    <p>Powered by <a href="http:w3schools.com">w3.css</a></p>
              </div>
          </div>
          <div className="TheBand-head-mobie">
              <div className="TheBand-head-mobie-main">
                <div  id="home">Home</div>
              
                   
                    <button  className='TheBand-head-mobie-bnt'>
                          
                        <i className="fa-solid fa-bars"></i>
                          <ul className="TheBand-list-mobie">
                        <li>Band</li>
                        <li>Tour</li>
                        <li>Contact</li>
                        <li>Merch</li>
                    </ul>
                
                      
               </button>
                  
                     
                    
               
               
              </div>

          </div> 
    </div>

    </div>
  )
}

export default TheBand