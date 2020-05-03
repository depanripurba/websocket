import React, { useState } from "react"
import {Link} from "react-router-dom"
import "./Join.css"

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    
   
    <div className="joinEksContainer">
      <div className="joinInerContainer">
        <center>
        <h1 className="heading">Join</h1>
        <div><input type="text" className="name" name="name" placeholder="input your name" onChange={(event)=>setName(event.target.value) } /></div>
        <div><input type="text" className="room" name="room"  placeholder="input your room" onChange={(event)=>setRoom(event.target.value) } /></div>
        <Link onClick={(event)=> (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}><button type="submit" className="btn-primary" >Sign in</button></Link>
        </center>
      </div>
    </div>
    
  );
};
export default Join; 
