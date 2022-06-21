import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

function GlobalNav() {
  const location = useLocation();
  const [hideHome, setHideHome] = React.useState(true);

  React.useEffect(() => {
    setHideHome(location.pathname === '/');
  }, [location])
  
  return (
      <nav className="App-header">
        <Link hidden={hideHome} to="/" id="home-link" className="btn draw-border" >HOME</Link>
        <button className="btn draw-border">CONTACT</button>
        <Link to="/api" className="btn draw-border" >API</Link>
        <Link to="/projects" className="btn draw-border" >PROJECTS</Link>
        <Link to="/about" className="btn draw-border" >ABOUT</Link>
      </nav>
  );
}

export default GlobalNav;
