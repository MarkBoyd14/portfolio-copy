import React from 'react';

export default function Project(props) {
  return (
    <div
      className="project"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div className="overlay">
        <h4 className="project-name">{props.name}</h4>
        <a
          className="project-btn"
          href={props.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-server"></i>
          Demo
        </a>
        <a
          className="project-btn"
          href={props.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-code"></i>
          Code
        </a>
      </div>
    </div>
  );
}
