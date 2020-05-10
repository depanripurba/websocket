import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
// import io from "socket.io-client";
import axios from "axios";
// let socket;
// const ENDPOINT = "localhost:5000";
const Upload = ({user}) => {
  const [gambar, setGambar] = useState();
  useEffect(() => {
   
  });
  const kirimgambar = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("gambar", gambar)
    fd.append('gambar','depanri purba')
    console.log(gambar)
    const nama = "depanri"
    axios.post("http://localhost:5000/ambilnama",{nama:nama}).then((res) => {
      console.log(res);
    })
    axios.post("http://localhost:5000/upload", fd,{
      onUploadProgress: progressEvent =>{
        console.log('upload progres :' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    }).then((res) => {
      console.log(res);
    });
  };
  const updatastate = ()=>{
    
  }
  return (
    <div>
      <form>
        <ImageUploader
          withIcon={true}
          withLabel={true}
          withPreview={true}
          fileSizeError=" melebihi batas maksimal"
          name="depanri"
          fileTypeError="tidak mendukung untuk ekstensi ini"
          buttonText="Pilih Gambar"
          label="maxsimal 5Mb"
          onChange={(e) => setGambar(e[0])}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
      </form>
      <center>
        <button onClick={kirimgambar} className="btn btn-primary">
          Kirim Gambar
        </button>
      </center>
    </div>
  );
};
export default Upload;
