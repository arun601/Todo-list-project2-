import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";





const App1=()=>{
    const[inputitem, setinputitem]=useState("");
    const[addlist,setinputlist]= useState([]);

    const inputitems=(event)=>{
        setinputitem(event.target.value);
    }
    const listitem=()=>{
        setinputlist((olditem)=>{
            return[...olditem,inputitem]
        });
        setinputitem("");
        
    }
    const deleteitems=(id)=>{
        console.log("delted");
        setinputlist((olditem)=>{
            return olditem.filter((arrelem,index)=>{
                return index!==id;
            });
        });
    };


    return(
        <div className="main-div">
            <div className="center-div">
                <br />
                <h1 > Todo list</h1>
                <br />
                <input type="text" className="xc" placeholder="add a item" onChange={inputitems} value={inputitem} />
                <button onClick={listitem} variant="contained">
                    +
                 </button>
               
                




                <ol>
                    {
                        addlist.map((itemval,index)=>{
                            return <Todolist 
                                text={itemval}
                                id={index}
                                key={index}
                                onselect={deleteitems}
                            />
                        })
                    }
                </ol>
                
            </div>
           
        </div>
    )
}
export default App1;