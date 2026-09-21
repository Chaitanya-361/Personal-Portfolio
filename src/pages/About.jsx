function About({ isActive }) {
  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm a passionate Software Engineer with a strong foundation in Data Structures & Algorithms and proven problem-solving abilities.
          I enjoy taking ownership of full projects end-to-end, from system design and development all the way through CI/CD and cloud deployment.
        </p>

        <p>
          I am a quick learner, comfortable picking up new frameworks and tools under time pressure to deliver high-quality solutions. 
          As a clear communicator and collaborative team player, I thrive in environments that require strong interpersonal skills and teamwork.
        </p>
      </section>

      {/* service */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Full-Stack Development</h4>
              <p className="service-item-text">
                Building scalable web applications using React, Node.js, and Express with modern databases like PostgreSQL and MongoDB.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-cloud.svg" alt="Cloud & DevOps icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Cloud & DevOps</h4>
              <p className="service-item-text">
                Containerizing and deploying applications using Docker, AWS (EC2), GitHub Actions, and Nginx for production environments.
              </p>
            </div>
          </li>
          
          <li className="service-item">
            <div className="service-icon-box" style={{marginTop: '0px'}}>
              <img src="/assets/images/icon-ai.svg" alt="AI Integration icon" width="50" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">AI Integration</h4>
              <p className="service-item-text">
                Implementing features like Retrieval-Augmented Generation (RAG) using pgvector and integrating LLMs for personalized user experiences.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-puzzle.svg" alt="Problem Solving icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Problem Solving</h4>
              <p className="service-item-text">
                Leveraging C++ and core CS fundamentals to build optimized algorithms and backend logic.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default About;
