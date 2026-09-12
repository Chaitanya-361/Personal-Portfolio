import { useState } from 'react';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/my-avatar.png" alt="Surya Chaitanya Reddy" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Surya Chaitanya Reddy">Surya Chaitanya Reddy</h1>
          <p className="title">Software Engineer</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar} data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:suryachaitanyareddy22@gmail.com" className="contact-link">suryachaitanyareddy22@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919866517335" className="contact-link">+91 9866517335</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Amaravati, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
