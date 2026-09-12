function Navbar({ activePage, setActivePage }) {
  // An array of all our page names
  const pages = ['About', 'Resume', 'Portfolio', 'Hobbies', 'Contact'];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => {
          // Convert 'About' to 'about' for easier comparison
          const pageLower = page.toLowerCase();
          return (
            <li className="navbar-item" key={pageLower}>
              <button 
                className={`navbar-link ${activePage === pageLower ? 'active' : ''}`} 
                onClick={() => {
                  setActivePage(pageLower);
                  window.scrollTo(0, 0); // Scroll to top when changing page
                }}
                data-nav-link
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
