import React,{useState} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Registrasi from './component/Registrasi/Registrasi'
import Chat from "./component/Chat/Chat"
import Login from "./component/Login/Login"
import Home from "./component/Home/Home"
  

const App = ()=>{
   var [login,setLogin] = useState(false)
   var [user,setUser] = useState("ini hanya percobaan saja")
   
    return(
    <Router>
        {console.log(user)}
        <Route path="/" exact render={()=>login===true ? (<Home />) : (<Login nama={(nilai)=>setUser(nilai)} login={(value)=>setLogin(value)} />)} />
        <Route path="/chat" component={Chat} />
        <Route path="/Registrasi" component={Registrasi} />
    </Router>
    )
}

export default App