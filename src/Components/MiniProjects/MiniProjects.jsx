import React from 'react';
import './MiniProjects.css';

const projects = [
    {
        title: 'Amazon Clone',
        description: 'A full-stack e-commerce web application similar to Amazon.',
        code: '// Amazon Clone code goes here',
    },
    {
        title: 'Spotify Clone',
        description: 'A web application that mimics the functionality of Spotify.',
        code: '// Spotify Clone code goes here',
    },
    {
        title: 'Currency Converter',
        description: 'A simple currency conversion application.',
        code: '// Currency Converter code goes here',
    },
    {
        title: 'Job Portal',
        description: 'A job search and application tracking platform.',
        code: '// Job Portal code goes here',
    },
    // Add more projects here...
    {
        title: 'Social Media Dashboard',
        description: 'A dashboard for managing social media accounts and analytics.',
        code: '// Social Media Dashboard code goes here',
    },
    {
        title: 'Weather App',
        description: 'An application to check weather forecasts for different locations.',
        code: '// Weather App code goes here',
    },
    {
        title: 'To-Do List',
        description: 'A simple to-do list application with task management features.',
        code: '// To-Do List code goes here',
    },
    {
        title: 'Recipe Finder',
        description: 'An app to discover and save recipes from various sources.',
        code: '// Recipe Finder code goes here',
    },
];

const MiniProjects = () => {
    return (
        <div id="MiniProjects">
            <h2 className='Title'>Projects</h2>
            <div className="container">
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="cardd">
                                <a className="card1">
                                    <p>{project.title}</p>
                                    <p className="small">{project.description}</p>
                                    <div className="go-corner">
                                        <div className="go-arrow">
                                            →
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MiniProjects;
