import React,{useState,useEffect} from 'react'
import ImageUploader from 'react-images-upload'
const Upload = ()=>{
    const [gambar,setGambar] = useState()
    useEffect(()=>{
      const data = new FormData()
      data.append('file',gambar)
      console.log(gambar)
    })
    return(
        <ImageUploader
                withIcon={false}
                withLabel={true}
                withPreview={true}
                buttonText='Pilih Gambar'
                onChange={(picture)=>setGambar(picture[0])}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
    )
}
export default Upload