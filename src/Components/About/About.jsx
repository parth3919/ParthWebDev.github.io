import React from 'react';
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBirthdayCake, faUser } from '@fortawesome/free-solid-svg-icons';


const downloadCV = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = "src/assets/Parth kumar CV.pdf";
    link.download = "Parth_WebDev_CV.pdf";
    link.click();
}

const About = () => {
    return (
        <section id="About" className="About">
            <div className="container">
                <div className="section-title">
                    <h2 className='Title'>About</h2>
                    <h1 className='cnt' data-aos="zoom-in-up" style={{ color: "#70d6ff" }}>Frontend Developer with Fullstack Aspirations</h1>
                    <p style={{ color: "#ffffff", paddingBottom: "4rem" }} data-aos="zoom-in-up">
                        I work as a frontend developer at a company, and I have a strong background in HTML, CSS, and JavaScript. My area of expertise is React. To ensure that our users have a flawless experience, my main duty is to translate design concepts into engaging and responsive user interfaces. Even though I'm concentrating on frontend development right now, I'd really like to expand my skill set to include full-stack development.
                        I was first drawn to web development because I was fascinated by the process of creating visually attractive and dynamic websites. I've developed a strong interest in backend technologies and the all-encompassing creation of apps over time. Working on both the client and server sides presents a challenge that excites me, and I'm forward to learn more about backend technologies in the future.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-4 profile-img" data-aos="zoom-in-up">
                        <img src="src\assets\profile-img.jpg" className="img-fluid" alt="profile-img" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="zoom-in-up">
                        <h3 className='cnt' style={{ color: "#70d6ff" }}>UI/UX Designer &amp; Web Developer &amp; Tech Enthusiast.</h3>
                        <p className="fst-italic" style={{ color: "#ffffff" }}>
                            Hello i am Parth kumar, a frontend developer currently working as a fresher at a startup. My passion lies in crafting delightful user experiences through clean and efficient code
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><FontAwesomeIcon icon={faBirthdayCake} style={{ color: "#92140c" }} /> <strong className='cnt'>Birthday:</strong> <span style={{ color: "#ffffff" }}>5 May 2000</span></li>
                                    <li><FontAwesomeIcon icon={faUser} style={{ color: "#92140c" }} /> <strong className='cnt'>Website:</strong> <span style={{ color: "#ffffff" }}>www.example.com</span></li>
                                    <li><FontAwesomeIcon icon={faUser} style={{ color: "#92140c" }} /> <strong className='cnt'>City:</strong> <span style={{ color: "#ffffff" }}>Greater Noida, India</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><FontAwesomeIcon icon={faUser} style={{ color: "#92140c" }} /> <strong className='cnt'>Degree:</strong> <span style={{ color: "#ffffff" }}>Master</span></li>
                                    <li><FontAwesomeIcon icon={faEnvelope} style={{ color: "#92140c" }} /> <strong className='cnt'>Email:</strong> <span style={{ color: "#ffffff" }}>parthkumarsihi@gmail.com</span></li>
                                    <li><FontAwesomeIcon icon={faUser} style={{ color: "#92140c" }} /> <strong className='cnt'>Freelance:</strong> <span style={{ color: "#ffffff" }}>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p style={{ color: "#ffffff" }}>
                            I have actively pursued personal initiatives to improve my abilities and support worthwhile endeavours in addition to my professional endeavours. Notably, I used React and Django to independently construct the Branstem_digital website. I gained significant expertise developing scalable, reliable web apps from the ground up with this project. In addition, I worked with the AssetAI website, which is a platform that offers transcription and video translation services. These initiatives helped me improve my capacity to lead teams, use a variety of technologies, and provide meaningful solutions.
                            I'm still dedicated to learning new things and remaining up to date with frontend best practices and technologies. My belief is that continuous education and professional growth are essential for delivering consistently high-quality solutions and stimulating innovation in the field of Web development
                        </p>

                        <button className="button" onClick={downloadCV}>
                            <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text">Download CV</span>
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
