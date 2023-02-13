import React, {useEffect} from 'react';
import './Footer.scss';
function Footer() {
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.1/css/font-awesome.min.css"></link>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Quantico&display=swap');
                
            </style>
        <div className="container2">
                <div className='footer-item'>
                    <h1>Alumni Cell</h1>
                    <div className="tt">
                     The Alumni Cell is the student-run cell to connect and broaden the Institute’s alum network.<br></br><br></br>
                     <p>
                     <span className='fa fa-map-marker bg-[#180c1e]'></span>
                     <span className='bg-[#180c1e]'>Alumni and Corporate Relations Office, 7th floor, Abhinandan Bhavan, Indian Institute of Technology Indore, Khandwa Road, Simrol, Indore-453552, India</span></p>
                    </div>
                </div>
                <div className="footer-item1">
                    <h1>Important Links</h1>
                    <ul id='links' style={{ listStyleType : "circle", marginLeft: "30px"}}>
                        <li><a href='https://alumni.iiti.ac.in/'>Alumni Portal</a></li>
                        <li><a href ='https://iiti.ac.in/'>IITI Official Website</a></li>
                    </ul>
                    {/* <br></br> */}
                    <p><a href='https://www.gmail.com' className='fa fa-envelope'></a> alumnicell@iiti.ac.in,<br></br> acroffice@iiti.ac.in </p>
                </div>
                <div className="footer-item2">
                    <h1>Find Us On</h1><br></br>
                    <a href="https://www.facebook.com/iitialumnicell/" className='fa fa-facebook' style={{ display: "inline" }}></a>
                    <a href="https://twitter.com/AlumniIit" className='fa fa-twitter' style={{display:"inline"}}></a>
                    <a href="https://www.linkedin.com/company/alumni-cell-iit-indore/" className='fa fa-linkedin' style={{display:"inline"}}></a>
                    <a href="https://www.instagram.com/alumni_cell_iiti/?hl=en" className='fa fa-instagram' style={{display:"inline"}}></a>
                </div>
            </div>
            <div className="end">
            © 2023 Alumni Cell - all rights reserved
            </div>
    </div>
  )
}

export default Footer