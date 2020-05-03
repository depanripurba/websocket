import React from "react";
import Pesan from "../Pesan/Pesan";
import "./Chatbox.css";
const Chatbox = (props) => {
  var i = 0;
  return (
    <div className="konten">
      <div className="kotak">
        {props.pesan.map((pesan) => {
          return <Pesan text={pesan.text} user={pesan.user} nama={props.nama} />;
        })}
        
      </div>
    </div>
  );  
};

export default Chatbox; 
