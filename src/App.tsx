import React from "react";
import './assets/fonts/font.css'
import './assets/css/index.css'
import logo from './assets/images/logo.jpeg';

export const App = ()=>{
  return <div>
    <img className="logo" src={logo} />
    <h1>This is a react project</h1>
  </div>
}