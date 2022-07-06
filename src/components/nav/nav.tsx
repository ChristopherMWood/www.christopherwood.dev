import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

function GlobalNav() {
  const location = useLocation();
  const [firstLoad, setFirstLoad] = React.useState(true);
  const [navClasses, setNavClasses] = React.useState('');
  const [homeButtonClasses, setHomeButtonClasses] = React.useState('btn draw-border');

  React.useEffect(() => {
    if (firstLoad) {
      if (location.pathname === '/') {
        setHomeButtonClasses('btn draw-border no-opacity');
      } else {
        setNavClasses('nav-border');
      }
      setFirstLoad(false);
    }
  }, [location, firstLoad])

  function navigatingFromHome() {
    setHomeButtonClasses('btn draw-border fade-in');
    setNavClasses('nav-border nav-animate-border');
  }

  function navigatingToHome() {
    setHomeButtonClasses('btn draw-border fade-out');
    setNavClasses('no-nav-border');
  }

  return (
      <nav className={navClasses}>
        <Link to="/" onClick={() => navigatingToHome()} id="home-link" className={homeButtonClasses} >HOME</Link>
        <Link to="/projects" onClick={() => navigatingFromHome()} className="btn draw-border" >PROJECTS</Link>
        <Link to="/about" onClick={() => navigatingFromHome()} className="btn draw-border" >ABOUT</Link>
      </nav>
  );
}

export default GlobalNav;
