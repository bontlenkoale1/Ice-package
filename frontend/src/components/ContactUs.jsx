import React, { useState } from 'react';
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        setFormSubmitted(true); 
        setFormData({
          name: '',
          email: '',
          message: ''
        }); 
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div className="contact-us-wrapper">
        <h2>We Would Love To Hear From You</h2>
      </div>
      <div className="contact-us-content-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {formSubmitted && (
          <div className="confirmation-message">
            <p>Your message has been sent. We'll get back to you soon!</p>
          </div>
        )}

        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>

      <div className="call-us-wrapper">
        <h3>Or You Can Give Us A Call</h3>
      </div>

      <div className="phone-wrapper">
        <div className="contact">
          <img src="/phone (1) (1).png" alt="phone" className="call-us-icon" />
          <div className="contact-info">
            <p className="contact-name">Lerato Selemela</p>
            <p>
              Phone: <a href="tel:+27761078013" className="phone-link">(+27) 76 107 8013</a>
            </p>
          </div>
        </div>

        <div className="contact">
          <img src="/phone (1) (1).png" alt="phone" className="call-us-icon" />
          <div className="contact-info">
            <p className="contact-name">Lerato Selemela</p>
            <p>
              Phone: <a href="tel:+27671274244" className="phone-link">(+27) 67 127 4244</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
