/*import React from 'react'*/
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="contact-us-wrapper">
        <h2>We Would Love To Hear From You</h2>
      </div>
      <div className="contact-us-content-wrapper">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="call-us-wrapper">
        <h3> Or You Can Give Us A Call</h3>
        <br />
        </div>
        <div className="phone-wrapper">
        <img src="/phone (1) (1).png" alt="phone" className="call-us" />
        <p>Lerato Selemela</p>
        <p>Phone : (+27)76 107 8013 </p>
        <img src="/phone (1) (1).png" alt="phone" className="call-us" />
        <p>Phone : (+27)67 127 4244</p>
        </div>
      </div>
  
  );
};

export default ContactUs;
