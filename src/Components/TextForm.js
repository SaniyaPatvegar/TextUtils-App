import React,{useState} from 'react'
import './Page.css';
export default function TextForm(props) {

    const nullText=()=>{
        if(text===""){
           alert("Please enter some text")
           // props.showAlert("Please enter some text","success");
            return;
        }
    }

   

    const handleUpClick=()=>{
        nullText();
        console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick=()=>{
        nullText();
        console.log("Lowercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");

    }
    const handleCopy=()=>{
        nullText();
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Text copied","success");

    }
    const handleClearClick=()=>{
        nullText();
        let newText="";
        setText(newText);
        props.showAlert("Text clered","success");

    }
   
    
    const handleOnchange=(event)=>{
        console.log("O change");
        setText(event.target.value);
    }
    
   
    const [text,setText]=useState("");
   

  return (
    
    <>
    
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
    <center><h1 className="heading">Text Analysis and Converter</h1></center>
        <h6 className='page'>{props.heading}</h6>
        <div className="mb-3 page" >
        <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"grey":"#FFF8DC",color:props.mode==="dark"?"white":"black"}}  value={text} onChange={handleOnchange} id="mybox" rows="6"></textarea>
        <br/>
        <button className='btn btn-primary mx-2 ' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-danger mx-2' onClick={handleClearClick}>Clear Text</button>
        </div>

    </div>
    <div className="container my-3 page" style={{color:props.mode==="dark"?"white":"black"}}>
    
        <h4>Your text summary</h4>
        <p>{text.split(" ").length-1} words and {text.length-(text.split(" ").length-1)} Characters</p>
        {/* <p>Number of Characters={text.length-(text.split(" ").length-1)}</p> */}
        <p>Minuts Required to Read={text.split(" ").length*0.008}</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
