import React from "react";
import DoomPhoto from "../images/mfdoom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={DoomPhoto} alt="emanuele del monte" />
      <h1 className="info--fullname">Varun Madhav</h1>
      <h5 className="info--role">Junior Front End Developer</h5>
      <div className="info--buttons">
        <address>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="linkedin.com/in/varun-madhav-87187926a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
