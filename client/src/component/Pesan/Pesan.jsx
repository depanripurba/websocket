import React from 'react'
import "./Pesan.css"
const Pesan = (props)=>{
    var cek = false;
   
    if(props.user===props.nama){
        cek=true
    }
    return(
        cek 
        ?(
        <div className="ppesan">
            <div className="thischat" > {props.text} </div>
            <div className="thisuser"> <img src={require('../../gambar/programer3.png')} alt="gambar "/> </div>
            {/* <div style={{color:"red"}} > {props.nama} </div> */}
        </div>
        ):(
            <div className="pesan">
            <div className="thisuser"> {props.user} </div>
            <div className="thischatt" > {props.text} </div>
        </div>
        )
    )
}

export default Pesan