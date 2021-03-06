import React from 'react';
import Project from '../components/Project';

export default function Projects() {
  document.title = 'Mark Boyd - Projects';
  const projects = [
    {
      name: 'GamerViews',
      image: '/images/gamerviews.png',
      demo: 'https://gamerviews.herokuapp.com/',
      code: 'https://github.com/MarkBoyd14/gamerviews',
    },
    {
      name: 'Tribute Page',
      image: '/images/tribute-page.png',
      demo: 'https://markboyd14.github.io/tribute-page/',
      code: 'https://github.com/MarkBoyd14/tribute-page',
    },
    {
      name: 'Survey Form',
      image: '/images/survey-form.png',
      demo: 'https://markboyd14.github.io/survey-form/',
      code: 'https://github.com/MarkBoyd14/survey-form',
    },
    {
      name: 'Snake',
      image: '/images/snake.png',
      demo: 'https://vanilla-js-snake.herokuapp.com/',
      code: 'https://github.com/MarkBoyd14/snake',
    },
    {
      name: 'Vanilla JS Todo List',
      image: '/images/todo-list.png',
      demo: 'https://markboyd14.github.io/todo-list/',
      code: 'https://github.com/MarkBoyd14/todo-list',
    },
    {
      name: 'Portfolio',
      image: '/images/portfolio.png',
      demo: 'https://mark-boyd-portfolio.herokuapp.com/',
      code: 'https://github.com/MarkBoyd14/portfolio',
    },
  ];
  return (
    <section className="projects">
      <h4 className="section-header">Projects</h4>
      <div className="projects-grid">
        {projects.map((project) => {
          return (
            <Project
              key={project.name}
              name={project.name}
              image={project.image}
              demo={project.demo}
              code={project.code}
            />
          );
        })}
      </div>
    </section>
  );
}
