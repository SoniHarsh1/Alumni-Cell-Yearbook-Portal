import React, {useState, useEffect } from 'react';
import {Link, useNavigate, useRouteLoaderData} from "react-router-dom";
import './Navbar.scss';
import { LoginContext } from '../../helpers/Context';
import { useContext } from 'react';
import axios from 'axios';

const Navbar=()=> {

  const{loggedin, setLoggedin, user, setUser, authData, setAuthData} = useContext(LoginContext);

  const navigate = useNavigate();

  const [searchword, setSearchword] = useState("");
  const [wordentered, setWordentered] = useState("");
  const [ wordEnteredList, setWordEnteredList ] = useState([]);
  const {result, setResult} = useContext(LoginContext);
  const [ isActive, setIsActive] = useState(false);
  const [display, setDisplay] = useState(false);

//After refreshing the page user is still signed in 
  useEffect(()=>{
    if(window.localStorage.getItem('user')!==null){
    const userLoggedIn = window.localStorage.getItem('user');
    if(userLoggedIn!=null){
    setUser(JSON.parse(userLoggedIn));
    }
  }
  const logged = (window.localStorage.getItem('loggedin'));
  if(logged==="true"){
       setLoggedin(true);
  }
    else{
        setLoggedin(false);
    }
  },[])

  //Logout Function
  const handleLogout = () =>{
      setUser({});
      window.localStorage.removeItem('user');
      setLoggedin(false);
      // setIsActive(!isActive);
      window.localStorage.setItem('loggedin', false)
      document.getElementById("google-login").hidden = false;
      navigate('/');
    }

    if(loggedin===true){
      document.getElementById("google-login").hidden = true;
    }

    //Search Engine Functions
    useEffect(() =>{
      axios.post('http://localhost:5000/searchword', {
        searchword: searchword
      }).then((res)=>{
        setResult(res.data);
        console.log(res.data);
      }).catch((err)=>{
        console.log(err)
      })
    })

    const searchAWord = (event) =>{
      setWordentered(event.target.value);
      console.log(wordentered);
    }

    useEffect(() =>{
      axios.post('http://localhost:5000/wordEntered',{
        wordentered: wordentered
      }).then((res)=>{
        console.log(res.data);
        setWordEnteredList(res.data);
        console.log(wordEnteredList)
      }).catch((err)=>{
        console.log(err);
      })
    }
    )

  return (
    <div className="overflow-x-hidden">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Quantico&display=swap');
      </style>
    <div className='header'>
      <img src='/images/1.png'/>
      <div className='navbar'>
        <ul>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/team">DEVELOPERS</Link>
          
          <li>   
          <div id='google-login'>
          </div>
        </li>
          
          {loggedin && 
          <>
          <li>
          <div className="searchr">
            <input type="text" placeholder="Search..." class="search" onChange = {(e)=>{
              searchAWord(e);
              (e.target.value==="")?setDisplay(false):setDisplay(true);
              // onEnter();
            }} />
             {wordEnteredList.map((val, index)=>
        (<li><button  className={`btnsearch2 ${(display)?"":"display-none"}`} key={index} onClick={(e)=>{
        e.preventDefault();
            setSearchword(val.email);
            // search=val;
            navigate('/comment')
        }}>{val.name}</button></li>)
          )}
          </div>
          <div className='logout-button'>
            {/* <button onClick={handleLogout}>logout</button> */}
          </div>

          <div className="dropdown" style={{}}>
            <div className="dropdown-btn" style={{display:'flex'}} onClick={e => setIsActive(!isActive)}>
              <img src="../../../images/profile.jpg" alt="" /> 
              <i className="fa fa-caret-down" style={{padding:'0px', textAlign:'left', verticalAlign:'center'}}></i>
            </div>
          
          {isActive && (
            <div className="dropdown-content">
              <div className="dropdown-item"><a style={{ padding:'2%'}}><button className='button' href="#" style={{textAlign:'left'}}>My Profile</button></a></div>
              <div className="dropdown-item"><a style={{ padding:'2%'}}><button onClick={handleLogout} className='button' style={{textAlign:'left'}}>Logout</button></a></div>
            </div>
          )}</div>

        </li>
        </>
        }

      </ul>        
    </div>
    </div>
  </div>
  );
}

export default Navbar;