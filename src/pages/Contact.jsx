import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const toastifySuccess = () => {
    toast.success('Your message has been sent. Thank you!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

  const toastifyError = () => {
    toast.error('There was an error sending your message.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_email: email,
      to_name: 'service_dcf2k29',
      from_name: name,
      from_phone: phone,
      from_message: message,
    };

    emailjs
      .send(
        'service_dcf2k29',
        'template_z6u35se',
        templateParams,
        'user_P6FRZUGEogdd7TnSW3hN7',
      )
      .then(
        function (res) {
          toastifySuccess();
          console.log('SUCCESS', res.status, res.text);
        },
        function (err) {
          toastifyError();
        },
      );

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  document.title = 'Mark Boyd - Contact';
  return (
    <section className="contact">
      <h3 className="section-header">Contact</h3>
      <form
        id="contact-form"
        action="mailto:mark.boyd1414@gmail.com"
        method="post"
        encType="multipart/form-data"
        name="email-form"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          className="form-control"
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number (optional)"
        ></input>
        <textarea
          className="form-control"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
          required
        ></textarea>
        <button
          className="submit-button"
          id="submit"
          type="submit"
          value="submit"
        >
          Submit
        </button>
      </form>
      <ToastContainer></ToastContainer>
      <div className="contact-links">
        <div className="contact-link">
          <a
            href="mailto: mark.boyd1414@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope contact-link-icon"></i>
            <h4>Email</h4>
          </a>
        </div>

        <div className="contact-link">
          <a
            href="https://www.linkedin.com/in/mark-boyd-60366117b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin contact-link-icon"></i>
            <h4>LinkedIn</h4>
          </a>
        </div>
        <div className="contact-link">
          <a
            href="https://github.com/MarkBoyd14?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github contact-link-icon"></i>
            <h4>Github</h4>
          </a>
        </div>
      </div>
    </section>
  );
}
