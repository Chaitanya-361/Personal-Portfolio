function Hobbies({ isActive }) {
  const hobbies = [
    {
      id: 1,
      title: 'Guitar and Singing',
      category: 'Music',
      img: '/assets/images/hobby-1.jpg',
      text: 'Playing guitar and singing since 3 years, love to explore new songs and genres.'
    },
    {
      id: 2,
      title: 'Exploring',
      category: 'Adventure',
      img: '/assets/images/hobby-2.jpg',
      text: 'Exploring new places and cultures, love to travel and experience new things.'
    },
    {
      id: 3,
      title: 'Sketching',
      category: 'Art',
      img: '/assets/images/hobby-3.jpg',
      text: 'Sketching and doodling since childhood, love to draw and express my creativity through art.'
    },
    {
      id: 4,
      title: 'Coding',
      category: 'Computer Science',
      img: '/assets/images/hobby-4.jpg',
      text: 'Into the world of codes, building new things everyday and exploring new technologies.'
    },
    {
      id: 5,
      title: 'Fast Bowling',
      category: 'Cricket',
      img: '/assets/images/hobby-5.jpg',
      text: 'Left arm fast bowler, trying to swing the ball like Wasim Akram.'
    },
    {
      id: 6,
      title: 'Running',
      category: 'Fitness',
      img: '/assets/images/hobby-6.jpg',
      text: 'Morning runs keeps me refreshed and energetic for the day.'
    },
    {
      id: 7,
      title: 'Workout',
      category: 'Fitness',
      img: '/assets/images/hobby-7.jpg',
      text: 'Building a better me and trying to be fit.'
    }
  ];

  return (
    <article className={`blog ${isActive ? 'active' : ''}`} data-page="hobbies">
      <header>
        <h2 className="h2 article-title">Hobbies</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {hobbies.map((post) => (
            <li className="blog-post-item" key={post.id}>
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.img} alt={post.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">
                    {post.text}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Hobbies;
