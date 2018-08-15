import React, { Component } from "react";
import { translation } from "../config";

class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="title__brandName">
          <span>{translation.brandName}</span>
        </div>
        <div className="title__power">
          <div className="title__power__display" />
          <div className="title__power__text">{translation.powerText}</div>
        </div>
      </div>
    );
  }
}

export default Title;
