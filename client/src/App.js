import React,{useState} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Registrasi from './component/Registrasi/Registrasi'
import Chat from "./component/Chat/Chat"
import Login from "./component/Login/Login"
import Home from "./component/Home/Home"
import Uploadfoto from "./component/Uploadfoto/Uploadfoto"
  

const App = ()=>{
   var [login,setLogin] = useState(false)
   var [user,setUser] = useState("")
   
    return(
    <Router>
        <Route path="/" exact render={()=>login===true ? (<Home user={user} />) : (<Login nama={(nilai)=>setUser(nilai)} login={(value)=>setLogin(value)} />)} />
        <Route path="/chat" component={Chat} />
        <Route path="/Registrasi" render={()=>login===false ? (<Registrasi login={(value)=>setLogin(value)} />) : (<Home user={user} />)} />
        <Route path="/uploadfoto" render={()=>login===true ? (<Uploadfoto user={user} />) : (<Login nama={(nilai)=>setUser(nilai)} login={(value)=>setLogin(value)} />)} />
    </Router>
    )
}

export default App