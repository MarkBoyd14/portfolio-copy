import React from 'react';

export default function Resume() {
  document.title = 'Mark Boyd - Resume';
  return (
    <div className="resume">
      <h3 className="section-header">Resume</h3>
      <div className="resume-grid">
        <div>
          <section className="resume-section">
            <h4>Profile</h4>
            <hr />
            <ul className="resume-list">
              <li>
                Aspiring full stack web developer with over 1 year of front-end
                experience
              </li>
              <li>Excellent problem-solving and logical reasoning abilities</li>
              <li>Great oral and written communication skills</li>
              <li>Proficient with HTML, CSS, and JavaScript</li>
              <li>
                Passionate about learning JavaScript and Node.js along with
                their modern libraries and frameworks with a focus on React
              </li>
              <li>Familiar with Java, C#, and PHP</li>
              <li>Good understanding of OOP concept and best practices</li>
              <li>
                Experience working with both SQL and NoSQL databases and writing
                queries to perform CRUD operations
              </li>
              <li>Knowledge of HTTP methods, REST API’s, and GraphQL</li>
            </ul>
          </section>
          <section className="resume-section">
            <h4>Experience</h4>
            <hr />
            <ul className="resume-list">
              <h5>Front-End React Developer - Avetti Commerce - Barrie, ON</h5>
              <h6>October, 2020 - January, 2021</h6>
              <li>
                Developed static web pages for multiple ecommerce marketplaces
                using React and Gatsby
              </li>
              <li>Improved the UI and UX of outdated web pages</li>
              <li>
                Ensured that web pages were accessible by following WCAG 2.1
                guidelines
              </li>
              <li>Performed QA testing and documented results</li>
              <li>
                Worked with a team to meet project deadlines using Agile
                methodologies
              </li>
            </ul>
            <ul className="resume-list">
              <h5>
                Front-End Wordpress Developer - Siva Creative - Barrie, ON
              </h5>
              <h6>September, 2019 - December, 2019</h6>
              <li>
                Developed websites using HTML, CSS, and a variety of WordPress
                plugins
              </li>
              <li>
                Implemented UI/UX principles to create responsive and appealing
                layouts
              </li>
              <li>Adhered to mock-up requirements</li>
              <li>Used WordPress to manage and maintain client’s websites</li>
              <li>
                Worked with a team to meet project deadlines using Agile
                methodologies
              </li>
            </ul>
          </section>
        </div>

        <aside className="resume-aside">
          <h4>Education</h4>
          <hr />
          <ul className="education-list">
            <li>Georgian College</li>
            <li>Computer Programming Diploma</li>
            <li>Barrie, ON</li>
          </ul>
          <ul className="education-list">
            <li>Trent University</li>
            <li>Bachelor of Science - Biology</li>
            <li>Peterborough, ON</li>
          </ul>
          <h4>Key Skills</h4>
          <hr />
          <ul className="resume-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Gatsby</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Wordpress</li>
            <li>Git/Github</li>
            <li>AWS</li>
          </ul>
          <h4>Certificates & Awards</h4>
          <hr />
          <ul className="resume-list">
            <li>Dean's List</li>
            <li>Responsive Web Design Certification - FCC (in progress)</li>
          </ul>
        </aside>

        <section className="resume-section">
          <h4>References</h4>
          <hr />
          <ul className="reference-list">
            <li>
              <p>David Sopuch - CEO - Avetti Commerce</p>
              <a href="tel:705-797-2105p3551">705-797-2105 ext. 3551</a>
            </li>
            <li style={{ paddingTop: '10px' }}>
              <p>Andrew Arkwell - Director of Development - Siva Creative</p>
              <a href="tel:705-717-4027">705-717-4027</a>
            </li>
          </ul>
        </section>
      </div>

      <a
        className="pdf-link"
        href="https://drive.google.com/file/d/1wPIjXlxNY5z0X5rQB-DN8GLOEWgmHNsl/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        View PDF
      </a>
    </div>
  );
}
