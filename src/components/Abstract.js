import React, { Component } from "react";
import "./Abstract.css";

export class Abstract extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="Abstract">
        <div className="abstract-title">{title}</div>
        {children}
      </div>
    );
  }
}

export default Abstract;
