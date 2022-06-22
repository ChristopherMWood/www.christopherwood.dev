import React from "react";
import "./styles.scss";

function ProjectView(props: any) {
  return (
    <div>
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
        <a href={props.project.gitUrl} target="_blank">GitHub</a>
        <a href={props.project.projectUrl} target="_blank">Link</a>
    </div>
  );
}

export default ProjectView;
