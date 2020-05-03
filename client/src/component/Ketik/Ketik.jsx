import React from "react";
import "./Ketik.css";
const Ketik = (props) => {
  return (
      
    <div className="box">
      
      <div>
        <input
          type="text"
          value={props.pesan} 
          className="kinput"
          onChange={(e)=>props.ubahpesan(e.target.value)}
          onKeyPress={event => event.key === 'Enter' ? props.kirim(event) : null}
        />
      </div>
      <div className="send" onClick={props.kirim}>
        <p className="kata">send</p>
      </div>
    </div>
  );
};

export default Ketik;
