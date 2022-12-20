import './TextInput.css';
import React from "react";

function TextInput(props) {
  return (
    <div>
        <textarea 
            placeholder={props.placeholder}
            className={props.className}>
        </textarea>
    </div>
  );
}

export default TextInput;