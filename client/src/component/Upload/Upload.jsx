import React,{useState,useEffect} from 'react'
import ImageUploader from 'react-images-upload'
import io from "socket.io-client";
let socket; 
const ENDPOINT = "localhost:5000";
const Upload = ()=>{
    const [gambar,setGambar] = useState()
    useEffect(()=>{
        socket = io(ENDPOINT);
    },[ENDPOINT])
const kirimgambar = (e)=>{
    const data = new FormData()
    e.preventDefault()
    console.log(gambar)
    data.append('file',gambar)
    console.log(data)
    socket.emit('upload',{data})
}
    return(
        <div>
        <ImageUploader
                withIcon={true}
                withLabel={true}
                withPreview={true}
                fileSizeError=' melebihi batas maksimal'
                name='depanri'
                fileTypeError='tidak mendukung untuk ekstensi ini'
                buttonText='Pilih Gambar'
                label='maxsimal 5Mb'
                onChange={(e)=>setGambar(e[0])}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            <center><button onClick={kirimgambar} className="btn btn-primary">Kirim Gambar</button></center>
            </div>
    )
    
}
export default Upload