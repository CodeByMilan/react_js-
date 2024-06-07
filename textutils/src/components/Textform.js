import React, { useState } from "react";

export default function Textform(props) {
  const [text, Settext] = useState("Enter The Text Here");
  //function for uppercase logic
  const ToUpperCase = ()=>{
    const newText= text.toUpperCase();
    Settext(newText);

  }
  const ToLowerCase = ()=>{
    const newText= text.toLowerCase();
    Settext(newText);

  }
  const ClearText = ()=>{
    const newText="";
    Settext(newText);

  }
  const handleonChange =(event) =>{
    //this will allow to write in the text box as when we write the text the text valuw will be text so that the value of the tect will be target value
    Settext(event.target.value)
  }
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleonChange} 
        >
        </textarea>
      </div>
      <button type="button" onClick={ToUpperCase} className="btn btn-primary mx-1">
        Convert to UpperCase
      </button>
      <button type="button" onClick={ToLowerCase} className="btn btn-primary mx-1">
       Convert to LowerCase
      </button>
      <button type="button" onClick={ClearText} className="btn btn-primary  mx-">
        ClearText
      </button>
    </>
  );
}
