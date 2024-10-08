import React from "react";

const Button = ({ color, btnText }) => {
  //   const btnText = "Login";
  return <button className={`bg-${color}-400 text-xl`}>{btnText}</button>;
};

export default Button;
