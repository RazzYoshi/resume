import React, { Component } from "react";
import "./EmphaticParagraph.css";

export class EmphaticParagraph extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="EmphaticParagraph">
        <p className="paragraph">
          <em>{title}&nbsp;</em>
          {children}
        </p>
      </div>
    );
  }
}

export default EmphaticParagraph;
