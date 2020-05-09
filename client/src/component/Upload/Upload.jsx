import React,{useState,useEffect} from 'react'
const Upload = ()=>{
    const [file,setFile] = useState()
    useEffect(()=>{
        console.log(file)
    })
    return(
        <div className="mt-3">
            <input type="file" onChange={(e)=>setFile(e.target.files[0])} /><br/>
            <button type="submit" className="btn btn-danger">Send</button>
        </div>
    )
}
export default Upload