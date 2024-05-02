import React, { useState } from 'react'
import './Styles/cal.css'
export default function Calculator() {
    const [cal,setCal]=useState('');
    const handleeval=()=>{
        setCal(eval(cal));
    }
  return (
    <div className='main'> 
    <br></br>
        <h1>***Calculator***</h1>
        <input type='text' value={cal}/><br></br><br></br>
        <button onClick={()=>{setCal(prev=>prev + "1")}}>1</button>
        <button onClick={()=>{setCal(prev=>prev + "2")}}>2</button>
        <button onClick={()=>{setCal(prev=>prev + "3")}}>3</button>
        <button onClick={()=>{setCal(prev=>prev + "+")}}>+</button>
        <br></br>
        <button onClick={()=>{setCal(prev=>prev + "4")}}>4</button>
        <button onClick={()=>{setCal(prev=>prev + "5")}}>5</button>
        <button onClick={()=>{setCal(prev=>prev + "6")}}>6</button>
        <button onClick={()=>{setCal(prev=>prev + "-")}}>-</button>
        <br></br>
        <button onClick={()=>{setCal(prev=>prev + "7")}}>7</button>
        <button onClick={()=>{setCal(prev=>prev + "8")}}>8</button>
        <button onClick={()=>{setCal(prev=>prev + "9")}}>9</button>
        <button onClick={()=>{setCal(prev=>prev + "*")}}>*</button>
        <br></br>
        <button onClick={()=>{setCal(prev=>prev + "0")}}>0</button>
        <button onClick={()=>{setCal(prev=>prev + "/")}}>/</button>
        <button onClick={()=>{setCal(prev=>prev + "%")}}>%</button>
        <button onClick={handleeval}>=</button>
    </div>
  )
}