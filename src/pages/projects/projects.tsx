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
      <h2>Under Construction</h2>
      <div>
        {projects.map(project => 
          <ProjectView project={project} />
        )}
      </div>
    </main>
  );
}