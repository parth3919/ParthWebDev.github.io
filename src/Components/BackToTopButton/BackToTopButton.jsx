import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './BackToTopButton.css';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const scrollThreshold = 250;

            // Show or hide the button based on the scroll position
            setIsVisible(scrollTop > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            //  component unmount krne pe ye function remove krta hai scroll event listener ko
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    );
};

export default BackToTopButton;
