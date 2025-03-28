import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', mobile: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:manas842500@gmail.com?subject=Contact from ${formData.name}&body=Mobile: ${formData.mobile}%0D%0A%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', mobile: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem', color: '#333' }}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Your Mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: '100px' }}
        ></textarea>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <p>Email: <a href="mailto:manas842500@gmail.com">manas842500@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/manas-rathore/" target="_blank" rel="noopener noreferrer">linkedin.com/in/manas-rathore</a></p>
        <p>GitHub: <a href="https://github.com/manasrathore" target="_blank" rel="noopener noreferrer">github.com/manasrathore</a></p>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: 'white',
  fontSize: '1.2rem',
  cursor: 'pointer'
};

export default Contact;