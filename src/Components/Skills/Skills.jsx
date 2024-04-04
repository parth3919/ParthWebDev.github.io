import React from 'react';
import "./Skills.css"

const Skills = () => {
    const skillsData = [
        { name: 'HTML', percentage: 99 },
        { name: 'CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 75 },
        { name: 'React', percentage: 70 },
        { name: 'Git&GitHub', percentage: 90 },
        { name: 'AWS', percentage: 30 }
    ];

    return (
        <div>
            <h2 className='Title'>Skills</h2>
            <section id="skills" className="skills section-bg">
                <div className="container">
                    <div className="section-title">
                        <p style={{ color: "#ffffff", paddingBottom: "5rem" }}>As a passionate web developer, I bring a diverse skill set to the table. From crafting responsive user interfaces to building robust backend solutions, here's a snapshot of my expertise:</p>
                    </div>
                    <div className="row skills-content">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="col-lg-6" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="progress">
                                    <span className="skill">{skill.name} <i className="val">{skill.percentage}%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${skill.percentage}%` }}
                                            aria-valuenow={skill.percentage}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
