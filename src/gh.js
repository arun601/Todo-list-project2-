import React from "react";
import ReactDom from "react-dom";
const currentdate=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();

ReactDom.render(
    <>
       <h1> New Delhi </h1>
        <h3> today delhi timing is={time}</h3>
        <h3> date is={currentdate}</h3>

    </>,
    document.getElementById('root')


);
