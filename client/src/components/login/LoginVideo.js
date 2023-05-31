import React from 'react'; 
import landingVideo from '../../projectVideos/landingVideo.mp4'
import Form from './loginForm';

const LoginVideo = () => {
    return (
        <div className ="landingVideo">
            <video src={landingVideo} autoPlay loop muted />
        <Form />
        </div>
    )
}

export default LoginVideo