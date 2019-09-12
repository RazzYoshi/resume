import React, { Component } from "react";
import "./Footer.css";
import { GITHUB_URL, LINKEDIN_URL, WEBSITE_URL, EMAIL } from "../Info";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <hr className="thick-divide" />
        <p className="footline">
          <p className="contact">Contact: {EMAIL}</p>
          <p className="footer-icon-row">
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

export default Footer;
