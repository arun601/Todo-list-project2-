import { useState } from "react";
import React  from "react";
// import AccessibleIcon from '@mui/icons-material/Accessible';

    const App=()=>{
const [fullname,setfullname]=useState({
    fname:"",
    lname:"",
    email:"",
});


const clickme=(event)=>{
    const value=event.target.value;
  const name=event.target.name;
 
  setfullname((prevalue)=>{
    if(name === "fname"){
        return {
            fname:value,
            lname:prevalue.fname,
        };

        
    }
    else if(name==="lname"){
        return {
            fname:prevalue.fname,
            lname:value,
        };

        
    }

});
}

const onsubmit=(event)=>{
    event.preventDefault();
    alert("form submitted");
 
}




    return (
        <>
        <div>
        <form onSubmit={onsubmit}>
        <h1>hello {fullname.fname} {fullname.lname} {fullname.email}</h1>
        <input type="text" name="fname" onChange={clickme} placeholder="enter your name"  />
        <input type="text" name="lname" onChange={clickme} placeholder="enter passward"  />
        <input type="text" name="email" onChange={clickme} placeholder="email" />
        <button>click</button>
        </form>
       </div>
        </>
    );

};
export default App;