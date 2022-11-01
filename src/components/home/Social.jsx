import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Social() {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/grinchenko-s/" target="_blank" rel="noreferrer"><BsLinkedin className="home__social-icon"/></a>
            <a href="https://github.com/Butterzzz" target="_blank" rel="noreferrer"><BsGithub className="home__social-icon"/></a>
        </div>
    )
}

export default Social;