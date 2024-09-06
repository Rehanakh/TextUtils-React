import React ,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("UpperCase was clicked");
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }
  
  const handleLowClick=()=>{
     let newText=text.toLowerCase();
     setText(newText)
    props.showAlert("Converted to lowerCase!","success");

    
  }
  const handleOnChange= (event) =>{
     setText(event.target.value);
 
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText)
    props.showAlert("Text cleared!","success");

  }
  const handleCopy =()=>{
    console.log("I am copy");
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard","success");

  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success");

  }
   
    const [text,setText]=useState('');
    // text=("hhgghjjj"); --set text value wrond way
   // setText=("new text"); //correct way to set text
  return (
    <>
    <div className="conatainer" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
 </div> 
 <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
 <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to LowerCase</button>
 <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
 <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
 <button className="btn btn-primary mx-2" onClick={handleExtraSpace} >Remove Extra Space</button>


</div>  
    <div className="continer my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} charaters</p>
    <p>{0.008 * text.split(" ").length} Minites read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
