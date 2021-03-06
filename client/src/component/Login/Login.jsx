import React,{useEffect,useState} from 'react'
import io from 'socket.io-client'
import "./Login.css"
import {Link} from 'react-router-dom'
let socket
const Login = ({login,nama})=>{
    const ENDPOINT = 'localhost:5000'
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    useEffect(function(){
        socket = io(ENDPOINT)
        socket.on('konfirmasi',data=>{
                if(data.kode === 1){
                    login(data.data)
                    nama(email)
                }else if(data.kode === 2){
                    alert(data.pesan)
                    console.log(data.pesan)
                }else{
                    alert(data.pesan)
                    console.log(data.pesan)
                }
        })
    })
    const cekUSer = (e)=>{
        e.preventDefault()
        socket.emit('login',{email:email,password:password})
    
    }
    return(
        <div className="container lebar mt-5">
            <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email"  id="Email" className="form-control" placeholder="input your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div> 
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" className="form-control" placeholder="input your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                   <button type="submit" name="submit" className="btn btn-primary" onClick={cekUSer} >Login</button>
                </div> 
                <div className="form-group">
                  <Link to='/Registrasi'>Anda belum punya akun silahkan registrasi</Link>
                </div>         
            </form>
            </div>
           
        </div>
    )
}

export default Login