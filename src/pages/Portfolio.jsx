import { useState } from 'react';

function Portfolio({ isActive }) {
  const [filter, setFilter] = useState('All');
  const [isSelectActive, setIsSelectActive] = useState(false);

  const handleFilterClick = (category) => {
    setFilter(category);
    setIsSelectActive(false);
  };

  const projects = [
    { 
      id: 1, 
      title: 'AI Interview Preparation Platform', 
      category: 'Full Stack', 
      img: '/assets/images/project-1.jpg',
      link: '#',
      github: '#'
    },
    { 
      id: 2, 
      title: 'Velvet Streak - Productivity', 
      category: 'Full Stack', 
      img: '/assets/images/project-2.png',
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const categories = ['All', 'Full Stack', 'Backend'];

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li className="filter-item" key={cat}>
              <button
                className={filter === cat ? 'active' : ''}
                onClick={() => handleFilterClick(cat)}
                data-filter-btn
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${isSelectActive ? 'active' : ''}`}
            onClick={() => setIsSelectActive(!isSelectActive)}
            data-select
          >
            <div className="select-value" data-selecct-value>{filter === 'All' ? 'Select category' : filter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories.map((cat) => (
              <li className="select-item" key={cat}>
                <button onClick={() => handleFilterClick(cat)} data-select-item>{cat}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li className="project-item active" data-filter-item data-category={project.category.toLowerCase()} key={project.id}>
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
