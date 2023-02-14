import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../helpers/Context'
import './MakeAComment.scss'
import axios from 'axios'

const MakeAComment = () => {
    const {result, setResult, user, setUser} = useContext(LoginContext);
    console.log(result);

    const [comment, setComment] = useState("");

    const handleSubmit = () =>{
      axios.post('http://localhost:5000/myComments', {
        comment: comment,
        friend_email: result.email,
        friend_name: result.name,
        user_email: user.email
      }).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })

      axios.post('http://localhost:5000/newComments', {
        comment:comment,
        user_email: user.email,
        user_name: user.name,
        friend_email: result.email
      }).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    }

  return (
    <div className='container'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Quantico&display=swap');
      </style>
      <div className="container2">
        <div className="left1">
          <span className="dot"></span>
          <h1>Name - Department</h1>
          <div className='description'>
            <h1>Description</h1>
          </div>
        </div>
        <div className="right1">
          <h1 id='make'>Make a Comment</h1>
          <form onSubmit={handleSubmit}>
          <textarea name="comment" id="" cols="85" rows="14" placeholder='Add your Comment' value={comment} onChange={(e)=>{
            setComment(e.target.value);
          }}/><br />
          <input type='submit' value="Submit"/>
          <button type='submit'>POST!</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default MakeAComment;
