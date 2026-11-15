import React, { useState } from "react";
import {
  SparklesIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  SendIcon,
  CheckCircleIcon
} from "../components/Icons";

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Computer Science & Engineering",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <main className="page-container">
      {/* Header */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <SparklesIcon size={16} />
            <span>Connect with EMC College</span>
          </div>
          <h1 className="page-title">Admissions &amp; Campus Contact</h1>
          <p className="page-subtitle">
            Have questions about admissions, courses, placement training, or faculty research? Get in touch with our campus team.
          </p>
        </div>
      </section>

      <section className="contact-layout-grid">
        {/* Contact Info Cards */}
        <div className="contact-info-col">
          <div className="contact-info-card glass-panel">
            <div className="info-icon-bubble">
              <MapPinIcon size={24} />
            </div>
            <div>
              <h3 className="info-card-heading">Campus Location</h3>
              <p className="info-card-text">
                EMC College of Engineering &amp; Technology<br />
                Chennai - Bengaluru Highway, Sriperumbudur,<br />
                Tamil Nadu - 602105, India
              </p>
            </div>
          </div>

          <div className="contact-info-card glass-panel">
            <div className="info-icon-bubble">
              <MailIcon size={24} />
            </div>
            <div>
              <h3 className="info-card-heading">Email Inquiries</h3>
              <p className="info-card-text">
                <strong>Admissions:</strong> admissions@emccollege.edu.in<br />
                <strong>Support:</strong> enquiry@errormakesclever.com
              </p>
            </div>
          </div>

          <div className="contact-info-card glass-panel">
            <div className="info-icon-bubble">
              <PhoneIcon size={24} />
            </div>
            <div>
              <h3 className="info-card-heading">Phone Numbers</h3>
              <p className="info-card-text">
                <strong>Admissions Helpline:</strong> +91 98400 12345<br />
                <strong>Campus Board:</strong> 044-2715 6789
              </p>
            </div>
          </div>

          <div className="contact-info-card glass-panel">
            <div className="info-icon-bubble">
              <ClockIcon size={24} />
            </div>
            <div>
              <h3 className="info-card-heading">Office Hours</h3>
              <p className="info-card-text">
                Monday – Saturday: 8:30 AM – 5:30 PM<br />
                24/7 Digital Mentor Support via WhatsApp &amp; Discord
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Query Form */}
        <div className="contact-form-col">
          <div className="contact-form-card glass-panel">
            {submitted ? (
              <div className="form-success-state">
                <CheckCircleIcon size={56} className="success-icon" />
                <h3 className="success-title">Inquiry Received!</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. Our admissions counselor will contact you at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      department: "Computer Science & Engineering",
                      message: ""
                    });
                  }}
                  className="btn btn-primary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="campus-inquiry-form">
                <h2 className="form-card-title">Send Us a Message</h2>
                <p className="form-card-subtitle">
                  Fill in your details and our academic advisors will guide you through courses, scholarships, and campus facilities.
                </p>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Kavin Raj"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="kavin@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Mobile Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="dept" className="form-label">Department of Interest</label>
                  <select
                    id="dept"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="form-select"
                  >
                    <option value="Computer Science & Engineering">Computer Science &amp; Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics & Communication">Electronics &amp; Communication</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electrical & Electronics">Electrical &amp; Electronics</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="msg" className="form-label">Your Message or Query</label>
                  <textarea
                    id="msg"
                    rows="4"
                    placeholder="Tell us about your questions regarding curriculum, eligibility, or hostel accommodation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <SendIcon size={18} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
