import React from 'react';
import './styles.scss'
import githubLogo from '../../images/GitHub-Mark-Light-120px-plus.png';
import linkedinLogo from '../../images/linkedin-light-logo.png';
import exercismLogo from '../../images/exercism-purple-logo.png';
import Typed from 'typed.js';
import { Link } from "react-router-dom";

function Home() {
	const el = React.useRef(null);
	const el2 = React.useRef(null);
	const typed = React.useRef(null);
	const typed2 = React.useRef(null);

  // React.useEffect(() => {
  //   const options = {
  //   	strings: [
  //       'backend developer at heart',
  //       'full stack developer by trade'
  //     ],
  //     typeSpeed: 50,
  //   };
    
  //   // elRef refers to the <span> rendered below
  //   typed.current = new Typed(el.current, options);
  //   typed2.current = new Typed(el2.current, options);
    
  //   return () => {
  //     // Make sure to destroy Typed instance during cleanup
  //     // to prevent memory leaks
  //     typed.current.destroy();
  //   }
  // }, [])

  return (
    <div>
      <div id="page-content">
        {/* <span style={{ whiteSpace: 'pre' }} ref={el} />
        <span style={{ whiteSpace: 'pre' }} ref={el2} /> */}
        <div id="front-page-banner-one">backend developer at heart</div>
        <div id="front-page-banner-two">full stack developer by trade</div>
        <div id="social-icons-container">
        <a
          className="App-link"
          href="https://github.com/christopherMWood"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='social-logo' src={githubLogo} alt="My GitHub profile"/>
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/christopherwood/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='social-logo' src={linkedinLogo} alt="My Linkedin profile"/>
        </a>
        <a
          className="App-link"
          href="https://exercism.org/profiles/ChristopherMWood"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="exercism-logo" className='social-logo' src={exercismLogo} alt="My Exercism profile"/>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
