import React from 'react';
import Typewriter from 'typwriter-effect';

const Logo = () => {
    return (
        <div className="logo">
            <h1>
                <Typewriter 
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["LUTEUM"]
                }}
                />
            </h1>
        </div>
    )
};

export default Logo;