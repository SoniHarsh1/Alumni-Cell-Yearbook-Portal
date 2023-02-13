import React, {useState} from 'react';
import axios from 'axios';
import './Fill.scss'
import { useLocation } from 'react-router-dom';
import { LoginContext } from '../../helpers/Context';
import { useContext } from 'react';


function Fill(props) {
  const{user} = useContext(LoginContext);

  const[userData, setUserData] = useState({
    name_:"",
    roll_no:"",
    academic_program:"",
    department:"",
    personal_email_id:"",
    contact_details:"",
    current_company:"",
    designation:"",
    profile_image:""
  });


//sending data to store in the database

const onSubmit = () =>{
    axios.post("http://localhost:5000/userData", {
        email: user.email,
        name: userData.name_,
        roll_no: userData.roll_no,
        academic_program: userData.academic_program,
        department: userData.department,
        personal_email_id: userData.personal_email_id,
        contact_details: userData.contact_details,
        current_company: userData.current_company,
        designation: userData.designation,
        about: userData.about,
        profile_image:userData.profile_image
    }).then((res)=>{
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    })
}

  const setOptionValue = (e) =>{
    setUserData({ ...userData, [e.target.name]: e.target.value})
  }

  console.log(userData.academic_program)
  return (
      <div className='container'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Quantico&display=swap');
      </style>
      {/* <div className='header'>
        <img src='/images/1.png' alt='profile'/>
        <div className='navbar'>
          <ul>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">MY PROFILE</a>
          {/* <a href="#">Link</a> */}
            {/* <li>
              <div className="searchr">
                <input type="text" placeholder="Search..." class="search"/>
              </div>
            </li>
            <li>
              <a href='#'>
              <img src="/images/profile.jpg" alt="" id="profile"/>
              </a>
            </li>
          </ul>
        </div>
      </div> */} 
      <div className="container2">
        <div className="left">
          <h2> </h2><br/>
          <h1>Fill your Profile</h1><br/>
          <input type="text" placeholder="Name*" size="60" name="name_" value={userData.name_} onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })}/><br/>
          <input type="text" placeholder="Roll Number*" size="60" name="roll_no" value={userData.roll_no} onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })}/><br/>
          {/* <input type="text" placeholder="Academic Program*" size="60" name="academic_program" value={userData.academic_program} onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })}/><br/> */}

        <select name="academic_program" id="" defaultValue={userData.academic_program}  onChange={setOptionValue}>
            <option value="Bachelor of Technology (BTech)" name= "academic_program">Bachelor of Technology (BTech)</option>
            <option value="Master of Technology (MTech)" name= "academic_program">Master of Technology (MTech)</option>
            <option value="Master of Science (MSc)" name= "academic_program"  >Master of Science (MSc)</option>
            <option value="Five Year BTech + MTech" name= "academic_program" >Five Year BTech + MTech</option>
            <option value="MS (Research)" name= "academic_program">MS (Research)</option>
            <option value="Doctor of Philosophy" name= "academic_program">Doctor of Philosophy</option>
          </select><br />
          <input type="text" placeholder="Department*" size="60" name="department" value={userData.department} onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })}/><br/>
          <input type="text" placeholder="Personal Email ID*" size="60" name="personal_email_id" value={userData.personal_email_id} onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })}/><br/>
          <input type="text" placeholder="Contact Number*" size="60" name="contact_details" value={userData.contact_details} onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })}/><br/>
          <input type="text" placeholder="Current Company (if any)" size="60" name="current_company" value={userData.current_company} onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })}/><br/>
          <input type="text" placeholder="Designation" size="60" name="designation" value={userData.designation} onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })}/><br/>
          <button className="submit" onClick={onSubmit}>Submit</button>
        </div>
        </div>
        <div className="container4">
        <div className="right">
          <span className="dot"></span>
          <h2> </h2><br/>
          <h2>Insert your Profile Picture*</h2><br/>
          <div className="container3">
          <input type="text" placeholder="ABOUT ME" size="60"/><br/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Fill;
