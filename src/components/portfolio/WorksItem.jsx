import React from "react";
import { TbWorld } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

function WorksItems({ item }) {
    return (
        <div className="portfolio__card" key={item.id}>
            <img src={item.image} alt={item.title} className="portfolio__img" />
            <h3 className="portfolio__title">{item.title}</h3>
            <div className="portfolio__button-container">
                <a href={item.link} className="portfolio__button" target="_blank" rel="noreferrer">
                    <TbWorld className="portfolio__button-icon" /> Демо
                </a>
                <a href={item.github} className="portfolio__button" target="_blank" rel="noreferrer">
                    <AiFillGithub className="portfolio__button-icon" /> GitHub
                </a>
            </div>
        </div>
    )
}

export default WorksItems;