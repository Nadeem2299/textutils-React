import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
 const handleUpCase =()=>{
//  console.log("Upper case was clicked " + text)
  let newText= text.toUpperCase();
  setText(newText)
// if(text == text.toLowerCase())
// {
//   let newText= text.toUpperCase();
//   setText(newText)
//   // setBtnText("Lowercase");
// } 
// else
// {
//   let newText= text.toLowerCase();
//   setText(newText);
//   // setBtnText("Uppercase");
// }
}
const handleLoCase =()=>{
//  console.log("Upper case was clicked " + text)
  let newText= text.toLowerCase();
  setText(newText)
}
const handleClear =()=>{
//  console.log("Upper case was clicked " + text)
  let newText= "";
  setText(newText)
}
const handleCopy =()=>{
    var text= document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }
const handleXtraSpace =() =>{
    let newText=text.split(/[  ]+/)
    setText(newText.join(" "))
}
  
 const handleOnChange =(event)=>{
//  console.log("Text area on change")
 setText(event.target.value);
}
{/* Declare a new state variable, which we'll call "count" */}
const [text, setText] = useState("");
// const [btnText, setBtnText] = useState();
// text="new text" //wrong way to change state
//correct way
// setText("New text")
  return (
<>
<div className="container">        
<div className="mb-3">
<h1>{props.heading}</h1>  
{/* <label for="myBox" class="form-label">Example textarea</label> */}
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#212529':'white',color:props.mode==='light'?'#212529':'white'}} id="myBox" rows="8"></textarea>
</div> 
<button className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase{/*btnText*/}</button>
<button className="btn btn-primary mx-3" onClick={handleLoCase}>Convert to Lowercase{/*btnText*/}</button>
<button className="btn btn-primary" onClick={handleClear}>Clear text{/*btnText*/}</button>
<button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text{/*btnText*/}</button>
<button className="btn btn-primary" onClick={handleXtraSpace}>Remove Extra space{/*btnText*/}</button>

</div>
 <div className="container my-3">  
    <h2>Your text summary</h2>
    <p>{text.length===0?0:text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} time to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something to preview here"}</p>
 </div>
</>
  )
}

TextForm.propTypes ={
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps ={
    heading: "Enter the text to analyze below",
}