import React,{useEffect,useState,Fragment} from 'react'
import io from 'socket.io-client'
import "./Registrasi.css"
let socket
const Registrasi = ({login})=>{
    const ENDPOINT = 'localhost:5000'
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [nama,setNama] = useState(null)
    const [jenisKelamin,setJenisKelamin] = useState(null)
    const [alamat,setAlamat] = useState(null)
    var cekemail = false
    var ceknama = false
    var cekgender = false
    var cekalamat = false
    var cekpass = false
    useEffect(function(){
        socket = io(ENDPOINT);
        socket.on('resregister',(data)=>{
            login(data.data)
            console.log(cekemail)
        })
    })
    const Registrasi = (e)=>{
        e.preventDefault()
        const valemail = document.querySelector("#valemail")
        const valgender = document.querySelector("#valgender")
        const valalamat = document.querySelector("#valalamat")
        const valpass = document.querySelector("#valpass")
        const valnama = document.querySelector("#valnama")
        console.log(cekemail)
        if(email===null){
            valemail.classList.remove('hidden')
            valemail.classList.add('show')
            cekemail = true
        }else{
            valemail.classList.remove('show')
            valemail.classList.add('hidden')
        } 
        if(nama===null){
            valnama.classList.remove('hidden')
            valnama.classList.add('show')
            ceknama = true
        } 
        if(jenisKelamin===null){
            valgender.classList.remove('hidden')
            valgender.classList.add('show')
            cekgender = true
        }
        if(alamat===null){
            valalamat.classList.remove('hidden')
            valalamat.classList.add('show')
            cekalamat = true
        }
        if(password===null){
            valpass.classList.remove('hidden')
            valpass.classList.add('show')
            cekpass = true
        }

        socket.emit('registrasi',{email,jenisKelamin,alamat,password,nama})
    }
    
    return(
        <Fragment>
        <center className="mt-5"><h1>Daftarkan Akunmu</h1></center>
        <div className="container lebar mt-3">
            <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" className="form-control" placeholder="input your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlFor="" className='hidden' id='valemail'>*Email tidak boleh kosong</label>
                </div> 
                <div className="form-group">
                    <label htmlFor="nama">Nama</label>
                    <input type="text"  id="nama" className="form-control" placeholder="input your name" value={nama} onChange={(e)=>setNama(e.target.value)}/>
                    <label htmlFor="" className='hidden' id='valnama'>*Nama tidak boleh kosong</label>
                </div>
                <div className="form-group">
                    <label htmlFor="nama">Jenis Kelamin</label>
                    <input type="text"  id="nama" className="form-control" placeholder="input your gender" value={jenisKelamin} onChange={(e)=>setJenisKelamin(e.target.value)}/>
                    <label htmlFor="" className='hidden' id='valgender'>*Jenis kelamin tidak boleh kosong</label>
                </div>
                <div className="form-group">
                    <label htmlFor="alamat">Alamat</label>
                    <input type="text"  id="alamat" className="form-control" placeholder="input your address" value={alamat} onChange={(e)=>setAlamat(e.target.value)}/>
                    <label htmlFor="" className='hidden' id='valalamat'>*alamat tidak boleh kosong </label>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" className="form-control" placeholder="input your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="" className='hidden' id='valpass'>*Anda wajib mengisi password</label>
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