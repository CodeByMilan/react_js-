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

  const Capitalized = () => {
    const newText = text.replace(/\b\w/g, char => char.toUpperCase());
    Settext(newText);
  };

  const Copy = () => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Text copied to clipboard'))
      .catch(err => console.error('Could not copy text: ', err));
  };
  const handleonChange = (event) => {
    //this will allow to write in the text box as when we write the text the text valuw will be text so that the value of the tect will be target value
    Settext(event.target.value);
  };
  //count number of words
  //can use (text.split(" ").length)
  const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;
  const wordCount = countWords(text);
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         <h1> {props.title}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleonChange}
        ></textarea>
      </div>
      <button
        type="button"
        onClick={ToUpperCase}
        className="btn btn-primary mx-1"
      >
        Convert to UpperCase
      </button>
      <button
        type="button"
        onClick={ToLowerCase}
        className="btn btn-primary mx-1"
      >
        Convert to LowerCase
      </button>
      <button
        type="button"
        onClick={ClearText}
        className="btn btn-primary  mx-1"
      >
        ClearText
      </button>

      <button
        type="button"
        onClick={Capitalized}
        className="btn btn-primary  mx-1"
      >
        Capitalized Case
      </button>

      <button
        type="button"
        onClick={Copy}
        className="btn btn-primary  mx-1"
      >
        Copy
      </button>

      <div className="container my-2">
      <h1>Summary</h1>
        {wordCount} number of words and {text.length} number of character<br></br>
      
        It takes around {0.008*wordCount} minutes of time  to read the paragraph.
      </div>
      <div className="container my-2 ">
        <h2>Preview </h2>
        {text}
      </div>
    </>
  );
}
