import React, { Component } from "react";
import "./Subsection.css";

export class Subsection extends Component {
  render() {
    const { title = "", subtitle = "", children } = this.props;
    return (
      <div className="Subsection">
        {title && <div className="subsection-title">{title}</div>}
        {subtitle && <div className="subsection-subtitle">{subtitle}</div>}
        <div className="paragraph">{children}</div>
      </div>
    );
  }
}

export default Subsection;
