import { useState } from 'react';

function Contact({ isActive }) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const isFormValid = formData.fullname && formData.email && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      setStatus('Sending...');
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, 
            name: formData.fullname,
            email: formData.email,
            message: formData.message,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatus('Message Sent!');
          setFormData({ fullname: '', email: '', message: '' });
        } else {
          setStatus('Failed to send.');
        }
      } catch (error) {
        setStatus('Failed to send.');
      }
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          {/* Map set to Guntur, Andhra Pradesh, India */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122501.99969176466!2d80.37084534720986!3d16.306652516424912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f7999dd90f1e694!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="400" height="300" loading="lazy"></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className="form-btn" type="submit" disabled={!isFormValid || status === 'Sending...'} data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>{status || 'Send Message'}</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
