import React,{useEffect,useState,Fragment} from 'react'
import io from 'socket.io-client'
import "./Registrasi.css"
let socket
const Registrasi = ({login})=>{
    const ENDPOINT = 'localhost:5000'
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [nama,setNama] = useState()
    const [jenisKelamin,setJenisKelamin] = useState()
    const [alamat,setAlamat] = useState()
    useEffect(function(){
        console.log(email)
        console.log(password)
        socket = io(ENDPOINT)
        console.log("ini hal yang sangat aneh ba benar bernar aneh saya tidak tau harus berbuat apa")
    })
    const Registrasi = (e)=>{
        e.preventDefault()
        socket.emit('registrasi',{tes:'hai server',email,jenisKelamin,alamat,password,nama})
        const set = [email,password,nama,alamat,jenisKelamin]
        console.group(set)
    
    }
    return(
        <Fragment>
        <center className="mt-5"><h1>Daftarkan Akunmu</h1></center>
        <div className="container lebar mt-3">
            <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email"  id="Email" className="form-control" placeholder="input your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div> 
                <div className="form-group">
                    <label htmlFor="nama">Nama</label>
                    <input type="text"  id="nama" className="form-control" placeholder="input your name" value={nama} onChange={(e)=>setNama(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">Jenis Kelamin</label>
                    <input type="text"  id="nama" className="form-control" placeholder="input your gender" value={jenisKelamin} onChange={(e)=>setJenisKelamin(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="alamt">Alamat</label>
                    <input type="text"  id="alamt" className="form-control" placeholder="input your address" value={alamat} onChange={(e)=>setAlamat(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" className="form-control" placeholder="input your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                   <button type="submit" name="submit" className="btn btn-primary" onClick={Registrasi} >Registrasi</button>
                </div>        
            </form>
            </div>
           
        </div>
        </Fragment>
    )
}

export default Registrasi