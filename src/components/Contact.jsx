import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../data/portfolioData';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: '', email: '', subject: '', message: '' };
const initialErrors = { name: false, email: false, subject: false, message: false };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [valid, setValid] = useState(initialErrors);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    // Clear invalid style as user types
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: false }));
    }
  };

  const validate = () => {
    const newErrors = { name: false, email: false, subject: false, message: false };
    const newValid = { name: false, email: false, subject: false, message: false };
    let isValid = true;

    if (!form.name.trim()) { newErrors.name = true; isValid = false; }
    else newValid.name = true;

    if (!form.email.trim() || !EMAIL_REGEX.test(form.email.trim())) {
      newErrors.email = true; isValid = false;
    } else newValid.email = true;

    if (!form.subject.trim()) { newErrors.subject = true; isValid = false; }
    else newValid.subject = true;

    if (!form.message.trim()) { newErrors.message = true; isValid = false; }
    else newValid.message = true;

    setErrors(newErrors);
    setValid(newValid);
    return isValid;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

try {

  console.log({
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  });

  await emailjs.send(
    'service_6vweave',
    'template_gsfsps9',
    {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    },
    'tICK01nX3y9aOESsl'
  );

  setShowSuccess(true);
  setForm(initialForm);
  setValid(initialErrors);

  setTimeout(() => {
    setShowSuccess(false);
  }, 5000);

} catch (error) {
  console.error('EmailJS Error:', error);
  alert('Failed to send message');
}
};

  const inputClass = (field) => {
    if (errors[field]) return 'form-control is-invalid';
    if (valid[field]) return 'form-control is-valid';
    return 'form-control';
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="row g-5">
          {/* Contact details card */}
          <div className="col-lg-5 scroll-reveal">
            <div className="custom-card">
              <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>
                Contact Information
              </h3>
              <p className="text-muted mb-4">
                Feel free to reach out for internship opportunities, placement conversations, or general
                technical collaboration.
              </p>

              <ul className="contact-info-list">
                {contactInfo.map((item) => (
                  <li key={item.id} className="contact-info-item">
                    <div className="contact-info-icon" aria-hidden="true">
                      <i className={item.icon}></i>
                    </div>
                    <div className="contact-info-details">
                      <h6>{item.label}</h6>
                      <p>
                        {item.external ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {item.display}
                          </a>
                        ) : (
                          <a href={item.href}>{item.display}</a>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact form card */}
          <div className="col-lg-7 scroll-reveal delay-2">
            <div className="custom-card">
              <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>
                Send a Message
              </h3>

              {/* Success message */}
              {showSuccess && (
                <div
                  className="alert alert-success mb-4"
                  role="alert"
                  style={{ borderLeft: '4px solid #198754', opacity: 1, transition: 'opacity 0.5s ease' }}
                >
                  <i className="fa-solid fa-circle-check me-2"></i> Message Sent Successfully! Thank
                  you, I will get back to you shortly.
                </div>
              )}

              <form id="contactForm" noValidate onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-md-6 col-12">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={inputClass('name')}
                      id="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Please enter your name.</div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6 col-12">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={inputClass('email')}
                      id="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  </div>

                  {/* Subject */}
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className={inputClass('subject')}
                      id="subject"
                      placeholder="Enter subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Please enter a subject.</div>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className={inputClass('message')}
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <div className="invalid-feedback">Please enter your message.</div>
                  </div>

                  {/* Submit */}
                  <div className="col-12 pt-2">
                    <button type="submit" className="btn btn-accent w-100">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
