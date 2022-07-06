/* eslint-disable */

import "./styles.scss";
import ProjectView from "../../components/projectView/projectView";

const projects = [
  {
    title: "opportunitycost.life API",
    description: "",
    projectUrl: "",
    gitUrl: "https://github.com/ChristopherMWood/christopherwood.dev-backend",
    techUsed: [
      "JavaScript",
      "Node"
    ]
  },
  {
    title: "opportunitycost.life UI",
    description: "The front end site for Opportunity cost",
    projectUrl: "https://opportunitycost.life",
    gitUrl: "https://github.com/ChristopherMWood/christopherwood.dev-backend"
  },
  {
    title: "Opportunity Cost Chrome Extension",
    description: "",
    projectUrl: "",
    gitUrl: "https://github.com/ChristopherMWood/christopherwood.dev-backend"
  },
  {
    title: "christopherwood.dev",
    description: "",
    projectUrl: "https://christopherwood.dev",
    gitUrl: "https://github.com/ChristopherMWood/christopherwood.dev-frontend"
  }
]

export default function ProjectsPage() {
  return (
    <main className="page-container">
      <div className="under-construction-container">
      <h2>This page is currently Under Construction</h2>
      <p>
        While this page is toiled away on, you can view my public projects on
        <a href="https://www.github.com/ChristopherMWood"
          target="_blank"
          rel="noopener noreferrer">
            GitHub here
        </a>.
      </p>
      </div>
    </main>
  );
}
