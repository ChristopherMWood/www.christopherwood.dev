import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import ContactModal from "../contact/contact"

function GlobalNav() {
  const location = useLocation();
  const [hideHome, setHideHome] = React.useState(true);
  const [contactModalOpen, setContactModalOpen] = React.useState(false);

  React.useEffect(() => {
    setHideHome(location.pathname === '/');
  }, [location])

  let navClasses = hideHome ? "no-nav-border" : "nav-border";

  return (
      <nav className={navClasses}>
        <Link hidden={hideHome} to="/" id="home-link" className="btn draw-border" >HOME</Link>
        <button className="btn draw-border"  onClick={() => setContactModalOpen(o => !o)}>CONTACT</button>
        <Link to="/api" className="btn draw-border" >API</Link>
        <Link to="/projects" className="btn draw-border" >PROJECTS</Link>
        <Link to="/about" className="btn draw-border" >ABOUT</Link>
        <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} className="btn draw-border"/>
      </nav>
  );
}

export default GlobalNav;
