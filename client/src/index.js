import firebase from './Config/Index'
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from "react-dom"
import App from "./App"
console.log(firebase)
ReactDOM.render(<App />,document.querySelector("#root"))