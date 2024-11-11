"use client";  // Ensure this at the top for client-side component

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACTS</h1>
      <div className="contact-underline"></div>

      <div className="contact-grid">
        {/* Left Column */}
        <div className="contact-left">
          <section className="contact-inquiries">
            <h2>Inquiries:</h2>
            <p>
              For any inquiries, questions, or commendations, please call: 123-456-7890 or fill out the following form.
            </p>
          </section>

          <section className="contact-form-section">
            <h2>Contact Us:</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Form fields */}
              <div>
                <label htmlFor="firstName" className="contact-form-label">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="contact-form-label">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="contact-form-label">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="contact-form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter your subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-form-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="contact-form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-form-textarea"
                  rows={4}
                />
              </div>
              <button type="submit" className="contact-form-submit">
                Submit
              </button>
            </form>
          </section>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <section className="contact-details">
            <h3>Head Office:</h3>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <p>Email: <a href="mailto:info@mysite.com">info@mysite.com</a></p>
            <p>Tel: 123-456-7890</p>
            <p>Fax: 123-456-7890</p>
          </section>
          <section className="contact-details">
            <h3>Employment:</h3>
            <p>To apply for a job with Sphere Construction, please send a cover letter together with your C.V. to: 
              <a href="mailto:info@mysite.com">info@mysite.com</a>
            </p>
          </section>
          <section className="contact-details">
            <h3>Get a Quote:</h3>
            <p>Call: 123-456-7890</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
