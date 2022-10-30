import React from "react";
import CV from '../../assets/cv.pdf';

function CTA() {
    return (
        <div className="cta">
            <a href={CV} download className='btn'>Скачать CV</a>
            <a href="#contact" className='btn btn-primary'>Напиши мне</a>
        </div>
    )
}

export default CTA;