import React from "react";
import "./styles.scss";

function ProjectView(props: any) {
  return (
    <div>
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
        <a href={props.project.gitUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={props.project.projectUrl} target="_blank" rel="noopener noreferrer">Link</a>
    </div>
  );
}

export default ProjectView;
