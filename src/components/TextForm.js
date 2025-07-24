import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
           setText(newText);
            props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
           setText(newText);
           props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = "";
           setText(newText)
           props.showAlert("Text Cleared!", "success");
    }
    
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

const [text, setText] = useState("")
// text = "new text"; //wrong way to change the state
// setText("new text"); //correct way to change the state

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Genarated Speech", "success");


}
const handleCopy = () =>{
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipboard!", "success");

}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert("Extra Spaces Removed!", "success");

}








  return (
<>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 >{props.header}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#0b062a':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
   </div>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert Uppercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert Lowercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
   <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-1">Speak</button>


    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary :</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words ,and {text.length} characters</p>
      <p >{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
</>
  )
}
