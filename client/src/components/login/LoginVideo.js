import React from 'react'; 
import landingVideo from '../../projectVideos/landingVideo.mp4'
import Form from './loginForm';
import Logo from './LoginLogo';

const LoginVideo = () => {
    return (
        <div>
            <video className = 'landingVideo' src={landingVideo} autoPlay loop muted/> 
            <div className='content'>
                <Logo />
                <Form />
                </div>
        </div>
    )
}

export default LoginVideo