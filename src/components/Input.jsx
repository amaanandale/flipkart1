import React from "react";

const Input = ({ inputText, inputType }) => {
  console.log(inputType);
  return (
    <div>
      <label htmlFor={inputType}>{inputText}</label>
      <input type={inputType} placeholder={inputText} id={inputType} />
    </div>
  );
};

export default Input;
