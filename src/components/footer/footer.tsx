import "./styles.scss";

function Footer() {
  return (
      <footer>
        <div id="footer-social-links">
          <a
            className="App-link"
            href="https://github.com/christopherMWood"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/christopherwood/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="App-link"
            href="https://exercism.org/profiles/ChristopherMWood"
            target="_blank"
            rel="noopener noreferrer"
          >
            Exercism
          </a>
          <a 
            href="https://stackoverflow.com/users/1833177/cmw2379" 
            target="_blank"
            rel="noopener noreferrer">
              StackOverflow
          </a>
        </div>
      </footer>
  );
}

export default Footer;
