function Resume({ isActive }) {
  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Vellore Institute of Technology, Amaravati</h4>
            <span>2023 — 2027</span>
            <p className="timeline-text">
              B.Tech in Software Engineering
              <br/>
              CGPA: 9.06 / 10
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Sri Chaitanya Techno School</h4>
            <span>2023</span>
            <p className="timeline-text">
              Intermediate (12th Grade)
              <br/>
              Score: 91.6%
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Sri Chaitanya Techno School</h4>
            <span>2021</span>
            <p className="timeline-text">
              Secondary School (10th Grade)
              <br/>
              Score: 94.8%
            </p>
          </li>
        </ol>
      </section>

      {/* add open source contribution later*/}

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="medal-outline"></ion-icon>
          </div>
          <h3 className="h3">Certificates</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Agentic AI Certified Foundations Associate</h4>
            <span>Oracle University</span>
            <p className="timeline-text">
              Recognized for foundational expertise in Agentic AI architecture, autonomous agents, and generative workflows.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">CS50x: Introduction to Computer Science</h4>
            <span>Harvard University</span>
            <p className="timeline-text">
              Comprehensive course covering C, Python, SQL, and core computer science concepts.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">AWS Solutions Architect Associate Certification Program</h4>
            <span>Ethnus</span>
            <p className="timeline-text">
              Training for architecting and deploying secure and robust applications on AWS technologies.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Oracle Cloud Infrastructure Certified AI Foundations Associate</h4>
            <span>Oracle University</span>
            <p className="timeline-text">
              Foundational certification validating knowledge of artificial intelligence, machine learning concepts, and OCI AI services.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Engineer Role Certification</h4>
            <span>HackerRank</span>
            <p className="timeline-text">
              Role certification assessing problem solving, data structures, algorithms, and core software engineering principles.
            </p>
          </li>

        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">Technical Skills</h3>

        <ul className="skills-list content-card" style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <li className="skills-item">
            <h5 className="h5" style={{ marginBottom: '8px', color: 'var(--orange-yellow-crayola)' }}>Languages</h5>
            <p style={{ color: 'var(--light-gray)' }}>C++, Python, Java, JavaScript, TypeScript</p>
          </li>
          <li className="skills-item">
            <h5 className="h5" style={{ marginBottom: '8px', color: 'var(--orange-yellow-crayola)' }}>Frontend</h5>
            <p style={{ color: 'var(--light-gray)' }}>React.js, Tailwind CSS, HTML, CSS</p>
          </li>
          <li className="skills-item">
            <h5 className="h5" style={{ marginBottom: '8px', color: 'var(--orange-yellow-crayola)' }}>Backend & Databases</h5>
            <p style={{ color: 'var(--light-gray)' }}>Node.js, Express.js, REST APIs, PostgreSQL, MySQL, MongoDB, pgvector</p>
          </li>
          <li className="skills-item">
            <h5 className="h5" style={{ marginBottom: '8px', color: 'var(--orange-yellow-crayola)' }}>Cloud & DevOps</h5>
            <p style={{ color: 'var(--light-gray)' }}>AWS, Docker, GitHub Actions, Nginx, Vercel</p>
          </li>
          <li className="skills-item">
            <h5 className="h5" style={{ marginBottom: '8px', color: 'var(--orange-yellow-crayola)' }}>Tools & Platforms</h5>
            <p style={{ color: 'var(--light-gray)' }}>Git, GitHub, Linux, Bash Scripting, Postman, VS Code</p>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Resume;
