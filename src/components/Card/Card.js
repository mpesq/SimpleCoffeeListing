import React from "react";
import LabelPrice from "../LabelPrice/LabelPrice"
import "./Card.css";
import capuccino from "../../assets/cappuccino.jpg"

function Card(props)  {
  return (
    <div className="card">
      <img src={capuccino} alt="capuccino" />
      <div className="card-content">
        <div className="card-title">{props.title}</div>
        <LabelPrice price={props.price} /> 
      </div>
    </div>
  );
};

export default Card;
