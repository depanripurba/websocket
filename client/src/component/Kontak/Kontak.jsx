import React,{useState} from 'react'
import './Kontak.css'
const Kontak = ({kontak})=>{
    const namaa = ['depanri','antoni purba','minalda purba','feriandoni']
    const Chat = (e)=>{
        console.log(e.target.innerHTML)
        kontak(e.target.innerHTML)
    }
    return(
        <div>
      
        <ul>
           { 
               namaa.map(nama=>{
                  return(
                      <p name='kampret' onClick={(e)=>Chat(e)}> {nama} </p>
                  )
               })
           }
        </ul>
        </div>
    )
}

export default Kontak