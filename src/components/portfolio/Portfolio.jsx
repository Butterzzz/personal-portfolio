import React from "react";
import './portfolio.css';
import Works from './Works';

function Portfolio() {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Портфолио</h2>
            <span className="section__subtitle">Мои недавние работы</span>

            <Works />
        </section>
    )
}

export default Portfolio;