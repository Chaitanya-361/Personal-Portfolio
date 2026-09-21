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
      img: '/assets/images/project-1.png',
      link: 'http://34.235.142.51/',
    },
    { 
      id: 2, 
      title: 'Velvet Streak - Productivity', 
      category: 'Full Stack', 
      img: '/assets/images/project-2.png',
      link: 'https://velvet-streak.vercel.app/',
    },
    { 
      id: 3, 
      title: 'Task Manager', 
      category: 'Frontend', 
      img: '/assets/images/project-3.png',
      link: 'https://task-manager-one-flax-67.vercel.app/',
    },
    { 
      id: 4, 
      title: 'Unit Converter',
      category: 'Chrome Extension', 
      img: '/assets/images/project-4.png',
      link: 'https://github.com/Chaitanya-361/unit-converter',
    },
    { 
      id: 5, 
      title: 'Weather Extension',
      category: 'Chrome Extension', 
      img: '/assets/images/project-5.png',
      link: 'https://github.com/Chaitanya-361/Weather-Extension',
    },
    { 
      id: 6, 
      title: 'Links Saver',
      category: 'Chrome Extension', 
      img: '/assets/images/project-6.png',
      link: 'https://github.com/Chaitanya-361/Links-Saver',
    },
    { 
      id: 7, 
      title: 'Lost and Found',
      category: 'Full Stack', 
      img: '/assets/images/project-7.png',
      link: 'https://github.com/Chaitanya-361/Lost-and-Found',
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const categories = ['All', 'Full Stack', 'Frontend', 'Chrome Extension'];

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
