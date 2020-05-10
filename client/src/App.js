import React,{useState} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Registrasi from './component/Registrasi/Registrasi'
import Chat from "./component/Chat/Chat"
import Login from "./component/Login/Login"
import Home from "./component/Home/Home"
import Uploadfoto from "./component/Uploadfoto/Uploadfoto"
  

const App = ()=>{
   var [login,setLogin] = useState(true)
   var [user,setUser] = useState("ini hanya percobaan saja")
   
    return(
    <Router>
        {console.log(user)}
        <Route path="/" exact render={()=>login===true ? (<Home />) : (<Login nama={(nilai)=>setUser(nilai)} login={(value)=>setLogin(value)} />)} />
        <Route path="/chat" component={Chat} />
        <Route path="/Registrasi" component={Registrasi} />
        <Route path="/uploadfoto" render={()=>login===true ? (<Uploadfoto user={user} />) : (<Login nama={(nilai)=>setUser(nilai)} login={(value)=>setLogin(value)} />)} />
    </Router>
    )
}

export default App