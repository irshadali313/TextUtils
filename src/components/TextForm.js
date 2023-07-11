import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success ");
    }
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success ");
  }
  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
  }

  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }






    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // text = "new text"; //Wrong way to change the state
    // setText("new text"); //correct way to change the state


  return (
    <>
     
    <div className='container' style={{color:props.mode==="dark" ? "white":"black"}}>
<h1><b>{props.heading}</b></h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark" ? "grey":"white", color:props.mode==="dark" ? "white":"black"}} id="myBox" rows="8"></textarea>
</div>
<button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color:props.mode==="dark" ? "white":"black"}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter text in textbox to preview it"}</p>
    </div>
    </>
  )
}
