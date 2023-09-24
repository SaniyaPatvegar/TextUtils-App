import React, { useState } from 'react'

export default function About() {
    const[mystyle,setMyStyle]=useState({
        color:"black",
        backgroundColor:"white"

    });
    
    const [btntext,setBtnText]=useState("Enamble Dark Mode");
    const changeStyle=()=>{
        if(mystyle.color==="white"){
            setMyStyle(
                {color:"black",
                 backgroundColor:"white"
                }
            )
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle(
                {color:"white",
               backgroundColor:"black",
             
                }
            )
            setBtnText("Enamble Dark Mode")
        }
    }
  return (
        <div style={mystyle}>
            <center><h1>About Us</h1></center>
              

               <h6>
                React TextUtil App:
               </h6>
               <p>
                It is react app named as a Text Utils. It has various functionalities to manipulate text accoring to the need of users. It has both light and dark modes.
               </p>
              
        </div>
 
  )
}
