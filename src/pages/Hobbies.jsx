function Hobbies({ isActive }) {
  const hobbies = [
    {
      id: 1,
      title: 'Competitive Programming',
      category: 'Coding',
      date: 'Ongoing',
      img: '/assets/images/blog-1.jpg',
      text: 'Solving algorithmic challenges and continuously improving problem-solving speed.'
    },
    {
      id: 2,
      title: 'Exploring New Tech',
      category: 'Technology',
      date: 'Ongoing',
      img: '/assets/images/blog-2.jpg',
      text: 'Building small side projects with new frameworks or AI models like Gemini and Claude.'
    },
    {
      id: 3,
      title: 'Reading System Design',
      category: 'Learning',
      date: 'Ongoing',
      img: '/assets/images/blog-3.jpg',
      text: 'Studying the architecture of large-scale systems and cloud infrastructure.'
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
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">{post.date}</time>
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
