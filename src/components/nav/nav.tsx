import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
// import ContactModal from "../contact/contact"

function GlobalNav() {
  const location = useLocation();
  const [hideHome, setHideHome] = React.useState(true);
  const [navigatingFromHome, setNavigatingFromHome] = React.useState(false);
  // const [contactModalOpen, setContactModalOpen] = React.useState(false);

  React.useEffect(() => {
    console.log(location);
    setHideHome(location.pathname === '/');
  }, [location])

  React.useEffect(() => {
    if (navigatingFromHome) {
      console.log('TRANSITION FROM HOME');
      //ANIMATE AWAY BORDER AND HOME BUTTON
    } else {
      //ANIMATE IN BORDER AND HOME BUTTON
    }
  }, [navigatingFromHome])

  let navClasses = hideHome ? "no-nav-border" : "nav-border";

  return (
      <nav className={navClasses}>
        <Link hidden={hideHome} to="/" onClick={() => setNavigatingFromHome(false)} id="home-link" className="btn draw-border" >HOME</Link>
        {/* <button className="btn draw-border"  onClick={() => setContactModalOpen(o => !o)}>CONTACT</button> */}
        {/* <Link to="/api" className="btn draw-border" >API</Link> */}
        <Link to="/projects" onClick={() => setNavigatingFromHome(true)} className="btn draw-border" >PROJECTS</Link>
        <Link to="/about" onClick={() => setNavigatingFromHome(true)} className="btn draw-border" >ABOUT</Link>
        {/* <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} className="btn draw-border"/> */}
      </nav>
  );
}

export default GlobalNav;
