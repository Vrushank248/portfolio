import React, { useState } from 'react';
import './ContactForm.css';
import emailIcon from '../../assets/email-icon.svg'; // Add your email icon file in the public or src folder
import phoneIcon from '../../assets/phone-icon.svg'; // Add your phone icon file in the public or src folder

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the mailto link
        const mailtoLink = `mailto:vrushankvyas248@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="form-container">
            <div className="card">
                <header className="contact-header">
                    <h2>Contact Me</h2>
                    <p>Need to discuss a project or just want to chat? Reach out now!</p>
                </header>
                <div className="contacts">
                    <div className="contact-item">
                        <a href="mailto: vrushankvyas248@gmail.com">
                            <img src={emailIcon} alt="Email" />
                        </a>
                        <a href="mailto: vrushankvyas248@gmail.com">vrushankvyas248@gmail.com</a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
