import React from "react";

const Card = ({ name }) => {
  return (
    <div className="bg-slate-200 p-2 rounded-md ">
      <h1> You are invited to my Marriage</h1>
      <p>{name}</p>
    </div>
  );
};

export default Card;
