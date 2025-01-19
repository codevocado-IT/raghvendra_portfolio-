import React, { useState, useEffect } from 'react';
import './Chatbot.css'; // Import the CSS file for styling

const Chatbot = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
    });

    // Open the chatbot 30 seconds after page load
    useEffect(() => {
        const initialTimer = setTimeout(() => {
            setIsVisible(true);
        }, 30000); // 30 seconds
        return () => clearTimeout(initialTimer);
    }, []);

    // Open the chatbot 20 seconds after it is closed
    const handleClose = () => {
        setIsVisible(false);
        const reopenTimer = setTimeout(() => {
            setIsVisible(true);
        }, 20000); // 20 seconds
        return () => clearTimeout(reopenTimer);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        const apiUrl = 'https://webapi.codevocado.in/api/submit'; // Replace with actual endpoint
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you! Your information has been submitted.');
                setFormData({ name: '', mobile: '', email: '', message: '' });
                setStep(0);
                setIsVisible(false);
            } else {
                alert('There was an error submitting your details. Please try again.');
            }
        } catch (error) {
            alert('Failed to submit data. Please check your network connection.');
        }
    };

    return isVisible ? (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h4>Hi, I'm Shivi!</h4>
                <button onClick={handleClose} className="close-button">×</button>
            </div>
            <div className="chatbot-body">
                {step === 0 && (
                    <div className="chatbot-step">
                        <p>Are you looking for an appointment?</p>
                        <button onClick={() => setStep(1)}>Yes</button>
                        <button onClick={handleClose}>No</button>
                    </div>
                )}
                {step === 1 && (
                    <div className="chatbot-step">
                        <p>Please enter your details:</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Your Mobile Number"
                            value={formData.mobile}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                )}
            </div>
        </div>
    ) : null;
};

export default Chatbot;
