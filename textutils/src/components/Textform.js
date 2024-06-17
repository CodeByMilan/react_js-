import React, { useState } from "react";

export default function Textform(props) {
  const [text, Settext] = useState("");
  //function for uppercase logic
  const ToUpperCase = () => {
    const newText = text.toUpperCase();
    Settext(newText);
  };
  const ToLowerCase = () => {
    const newText = text.toLowerCase();
    Settext(newText);
  };
  const ClearText = () => {
    const newText = "";
    Settext(newText);
  };

  const RemoveExtraSpace = () => {
    //text.trim removes leading and tailing space and replace(/\s+/g, ' ') replaces multiples spaces with single space 
    const newText =  text.trim().replace(/\s+/g, ' ');
    Settext(newText);
  };

  const Copy = () => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Text copied to clipboard'))
      .catch(err => console.error('Could not copy text: ', err));
  };
  const Capitalized = () => {
    const newText = text.replace(/\b\w/g, char => char.toUpperCase());
    Settext(newText);
  };
  const handleonChange = (event) => {
    //this will allow to write in the text box as when we write the text the text valuw will be text so that the value of the tect will be target value
    Settext(event.target.value);
  };
  //count number of words
  //can use (text.split(" ").filter((element)=>{return element.length!=0}).length)
  const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;
  const wordCount = countWords(text);
  return (
    <>
    <div className="container my-4 ">
      <div className="mb-3" style={{color:props.mode==='dark' ? 'white':'black'} }>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         <h1> {props.title}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleonChange}
          style={{backgroundColor:props.mode==='light' ? 'white':'#0b144c',color:props.mode==='dark' ? 'white':'black' } }
        ></textarea>
      </div>
      <button
        type="button"
        onClick={ToUpperCase}
        className="btn btn-primary mx-1"
        disabled ={text.length===0}
      >
        Convert to UpperCase
      </button>
      <button
        type="button"
        onClick={ToLowerCase}
        className="btn btn-primary mx-1 my-1"
        disabled ={text.length===0}
      >
        Convert to LowerCase
      </button>
      <button
        type="button"
        onClick={ClearText}
        className="btn btn-primary  mx-1 my-1"
        disabled ={text.length===0}
      >
        ClearText
      </button>

      <button
        type="button"
        onClick={Capitalized}
        className="btn btn-primary  mx-1 my-1"
        disabled ={text.length===0}
      >
        Capitalized Case
      </button>

      <button
        type="button"
        onClick={Copy}
        className="btn btn-primary  mx-1 my-1"
        disabled ={text.length===0}
      >
        Copy
      </button>
      <button
        type="button"
        onClick={RemoveExtraSpace}
        className="btn btn-primary  mx-1  my-1"
        disabled ={text.length===0}
      >
        RemoveExtraSpace
      </button>

      <div className="container my-2" style={{color:props.mode==='dark' ? 'white':'#0b144c'} }>
      <h1>Summary</h1>
        {wordCount} number of words and {text.length} number of character<br></br>
      
        It takes around {0.008*wordCount} minutes of time  to read the paragraph.
      </div>
      <div className="container my-2 " style={{color:props.mode==='dark' ? 'white':'#0b144c'} }>
        <h2>Preview </h2>
        {text.length>0? text :"Enter the text above to preview here "}
      </div>
      </div>
    </>
  );
}
