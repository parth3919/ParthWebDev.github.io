import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Projects.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const projectsList = [
    {
      id: 1,
      name: 'Brainstem-Digital',
      description: 'Official Website Of a startUp company BrainstemDigital',
      imageUrl: '/src/assets/logo_brainstem.png',
    },
    {
      id: 2,
      name: 'AssetAI',
      description: 'assetAI is your one stop solution to navigate & leverage power of AI for your media',
      imageUrl: '/src/assets/translate.jpg',
    },
    {
      id: 3,
      name: 'AssetFlix',
      description: 'Launch your own OTT platform within Minutes....',
      imageUrl: '/src/assets/OTT1.jpg',
    },
  ];

  return (
    <div id='Projects'>
      <h2 data-aos="zoom-in-up" className='Title'> Live Products</h2>
      <p data-aos="zoom-in-up" className='mainpara'>
        "I've had the honour of working on a number of fascinating initiatives that have improved my abilities and aided in worthwhile undertakings. The official Brainstem-Digital website is one such project that I worked on on my own. My ability to use frontend development tools such as React and Django to create a dynamic and aesthetically pleasing platform is demonstrated on this website. In addition, I worked with others on projects like Assetflix and AssetAI, helping to develop reliable solutions for transcription and video translation services. I gained priceless experience working in teams, solving problems, and utilising a variety of technologies from these initiatives. You may visit or make use of these websites to see directly what my commitment to and proficiency in web building has produced."
      </p>
      <CardGroup className="card-container">
        {projectsList.map((project) => (
          <Card key={project.id} className='cards' data-aos="zoom-in-up">
            <Card.Img variant="top" src={project.imageUrl} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <button className="button-33" role="button">
                Comming Soon...
              </button> */}
              <div className="scene">
                <div className="cube">
                  <span className="side top">Comming Soon...</span>
                  <span className="side front">View</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default Projects;
