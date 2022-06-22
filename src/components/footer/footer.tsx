import React from "react";
import githubLogo from '../../images/GitHub-Mark-Light-120px-plus.png';
import linkedinLogo from '../../images/linkedin-light-logo.png';
import exercismLogo from '../../images/exercism-purple-logo.png';
import "./styles.scss";

function Footer() {
  return (
      <footer>
        <div id="footer-social-icons">
          <a
            className="App-link"
            href="https://github.com/christopherMWood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='footer-social-logo' src={githubLogo} alt="My GitHub profile"/>
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/christopherwood/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='footer-social-logo' src={linkedinLogo} alt="My Linkedin profile"/>
          </a>
          <a
            className="App-link"
            href="https://exercism.org/profiles/ChristopherMWood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="exercism-logo" className='footer-social-logo' src={exercismLogo} alt="My Exercism profile"/>
          </a>
        </div>
      </footer>
  );
}

export default Footer;
