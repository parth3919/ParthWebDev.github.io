import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical';
import backgroundImage from '../../assets/mypic3.jpg';

const Home = () => {
    const [springs, set] = useSpring(() => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    }));

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id="Home">
            <div className="bg-image">
                <img src={backgroundImage} className="img-background" alt="Background" />
            </div>
            <animated.div style={springs} className="fixed-caption">
                <div className="caption-left">
                    <h1 style={{ color: '#02CECB' }}>
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Parth Sharma',
                                1000,
                                'Web Developer',
                                1000,
                                'UI/UX Designer',
                                1000,
                                'Frontend Developer',
                                1000,
                            ]}
                        />
                    </h1>
                </div>
                <div className="caption-right" data-aos="zoom-in-up" data-aos-delay="1500">
                    <p className="caption-paragraph">
                        A passionate <span className="highlight">web developer</span> dedicated to creating <span className="highlight">stunning</span> and <span className="highlight">functional</span> websites.
                    </p>
                </div>
            </animated.div>
        </div>
    );
};

export default Home;
