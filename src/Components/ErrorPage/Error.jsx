import React from 'react';

function Error() {
    return (
        <div id='Error' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: "url('./src/Components/images/errorimage.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div style={{
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '2rem',
                borderRadius: '5px'
            }}>
                <h1>404 - Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default Error;