import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TextForm(props) {
    const [text, settext] = useState("");
    const handleUpClick = () => {
        console.log("handleUpClick was clicked");
        let UpText = text.toUpperCase();
        settext(UpText);
        props.showAlert("Coverted to uppercase","success");
    }
    const handleLowClick = () => {
        console.log("HandleLowCLick was clicked");
        let LowText = text.toLowerCase();
        settext(LowText);
        props.showAlert("Coverted to Lowercase","success");
    }

    const handleClearClick = () => {
        console.log("Clear text was clicked");
        settext("");
        props.showAlert("Cleared the text area","success");
    }

    const handleCopy = () => {
        console.log("Handlecopy was clicked");
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","success");
    }

    const removeExtraSpaces = () => {
        console.log("removeExtraSpaces was clicked");
        // let newText = text.split(" ");
        // settext(newText.join(" "))
        let newText = text.replaceAll(" ","");
        settext(newText)
        // let newText1 = text.split(" ");
        // let newtext2 = newText1.removeItemAll(" ")
        // settext(newtext2.join(" "))

    }
    const handleOnChange = (event) => {
        console.log("handleOnChange was clicked");
        settext(event.target.value);
    }
  return (
    <>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className= "form-control mb-3" value= {text} onChange = {handleOnChange} id="mybox" rows="8"></textarea>
            <button type="button" className="btn btn-primary mb-3 mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary mb-3 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mb-3 mx-1" onClick={handleClearClick}>Clear Text area</button>
            <button type="button" className="btn btn-primary mb-3 mx-1" onClick={handleCopy}>Copy text</button>
            <button type="button" className="btn btn-primary mb-3 mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>    
        <div className="container">
            <h1> Text Summary </h1>
            <p> {text.split(" ").length} words {text.length} characters </p>
            <p> Read Time in min = {text.split(" ").length * 0.008 }</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
   