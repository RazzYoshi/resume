import React, { Component } from "react";
import "./Link.css";

export class Link extends Component {
  render() {
    const { title, name, url } = this.props;
    return (
      <div className="Link">
        <p className="title">
          {title}&#124; <a href={url}>{name}</a>
        </p>
      </div>
    );
  }
}

export default Link;
