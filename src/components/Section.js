import React, { Component } from "react";
import "./Section.css";

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="Section">
        <hr className="thick-divide" />
        <div className="section-title"> {title}</div>
        <hr className="thin-divide" />
        {children}
      </div>
    );
  }
}

export default Section;
