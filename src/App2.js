import React from "react";
import { useState } from "react";

const App2=()=>{
    const[initial,final]=useState("");
    const[fullname,setfullname]=useState()
     const inputitem=(event)=>{
        final(event.target.value);
     }
     const onSubmit=()=>{
        setfullname(initial);
     }

    return (
        <>
            <div className="main-div">
               <div className="center-div">
                <h1>Hello {fullname}</h1>
                </div>
                <input type="text" name=""onChange={inputitem} id="" value={initial}placeholder="enter your name"/>
                <button className="btn" onClick={onSubmit} >Click me</button>
            </div>
        </>
    )
}
export default App2;