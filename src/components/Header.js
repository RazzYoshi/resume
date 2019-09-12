import React, { Component } from "react";
import "./Header.css";
import { GITHUB_URL, LINKEDIN_URL, WEBSITE_URL } from "../Info";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="Header">
        <hr className="thick-divide" />
        <p className="headline">
          <p className="header-title">{title}</p>
          <p className="header-icon-row">
            <a href={GITHUB_URL}>
              <FontAwesomeIcon className="Icon" icon={faGithub} />
            </a>
            <a href={LINKEDIN_URL}>
              <FontAwesomeIcon className="Icon" icon={faLinkedin} />
            </a>
            <a href={WEBSITE_URL}>
              <FontAwesomeIcon className="Icon" icon={faGlobeAmericas} />
            </a>
          </p>
        </p>
        <hr className="thin-divide" />
      </div>
    );
  }
}

export default Header;
