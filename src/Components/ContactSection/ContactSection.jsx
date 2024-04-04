import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com';
import "./ContactSection.css";
import 'aos/dist/aos.css';

const ContactSection = () => {
    const form = useRef(null);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(null);

    const validateForm = () => {
        const newErrors = {};

        if (!form.current.from_name.value.trim()) {
            newErrors.from_name = "Name is required";
        }

        if (!form.current.from_email.value.trim()) {
            newErrors.from_email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.current.from_email.value)) {
            newErrors.from_email = "Invalid email format";
        }

        if (!form.current.from_phone.value.trim()) {
            newErrors.from_phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(form.current.from_phone.value)) {
            newErrors.from_phone = "Invalid phone number";
        }

        if (!form.current.subject.value.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!form.current.message.value.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = async (formData) => {
        try {
            await emailjs.send('service_wss6r2i', 'template_auxxqhy', formData, 'zdsYz6eMHhiWVBw8a');
            setSuccessMessage('Your message has been sent successfully!');
        } catch (error) {
            console.error('Failed to send email:', error);
            setSuccessMessage('Failed to send message. Please try again later.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const formData = {
                from_name: form.current.from_name.value.trim(),
                from_email: form.current.from_email.value.trim(),
                from_phone: form.current.from_phone.value.trim(),
                subject: form.current.subject.value.trim(),
                message: form.current.message.value.trim(),
            };

            sendEmail(formData);
        }
    };

    return (
        <section id="Contact" className="contact-section">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h4 className="Title">Contact Me</h4>
                </div>

                <div className="GMap">
                    <iframe
                        style={{ border: 0, width: "100%", height: "270px" }}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.248477403226!2d77.5662985!3d28.3981375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce396e6e16783%3A0xb7db33be1c93535d!2sSupertech%20Upcountry%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20203201%2C%20India!5e0!3m2!1sen!2sus!4v1539943755621"
                        frameBorder="0"
                        allowFullScreen
                        title="Google Maps"
                    ></iframe>

                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info" data-aos="flip-down">
                            <div className="address">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#92140c" }} />
                                <h4 className="cnt">Location:</h4>
                                <p>Supertech Upcountry, 203201, INDIA</p>
                            </div>

                            <div className="email">
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#92140c" }} />
                                <h4 className="cnt">Email:</h4>
                                <p>parthkumarsihi@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0" data-aos="flip-down">
                        <form onSubmit={handleSubmit} ref={form} className="contact-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="from_name" className={`form-control ${errors.from_name ? 'is-invalid' : ''}`} id="name" placeholder="Your Name" required />
                                    {errors.from_name && <div className="invalid-feedback">{errors.from_name}</div>}
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className={`form-control ${errors.from_email ? 'is-invalid' : ''}`} name="from_email" id="email" placeholder="Your Email" required />
                                    {errors.from_email && <div className="invalid-feedback">{errors.from_email}</div>}
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="tel" className={`form-control ${errors.from_phone ? 'is-invalid' : ''}`} name="from_phone" id="phone" placeholder="Your Phone" required />
                                {errors.from_phone && <div className="invalid-feedback">{errors.from_phone}</div>}
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className={`form-control ${errors.subject ? 'is-invalid' : ''}`} name="subject" id="subject" placeholder="Subject" required />
                                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                            </div>
                            <div className="form-group mt-3">
                                <textarea className={`form-control ${errors.message ? 'is-invalid' : ''}`} name="message" rows="5" placeholder="Message" required></textarea>
                                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                            </div>
                            <div className="text-center my-3">
                                <button type="submit" className="button-name" role="button">Send Message</button>
                            </div>
                            {successMessage && (
                                <div className="alert alert-success mt-3" role="alert">
                                    {successMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
