import React from "react";

import "./cardStyle.css";

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.description}</p>
        <a href={props.link1} target="_blank" className="btn btn-dark">
          {props.buttontext1}
        </a>
        <a href={props.link2} target="_blank" className="btn btn-dark">
          {props.buttontext2}
        </a>
      </div>
    </div>
  );
};

export default Card;
