import React from "react";
import './services.css';
import { BsCheck2 } from 'react-icons/bs';

function Services() {
    return (
        <section id="services">
            <h5>Что я предлагаю</h5>
            <h2>Сервисы</h2>

            <div className="container services__container">

                <article className="services">
                    <div className="services__head">
                        <h3>UI/UIX design</h3>
                    </div>
                    <ul className="services__list">
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

                <article className="services">
                    <div className="services__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="services__list">
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

                <article className="services">
                    <div className="services__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="services__list">
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck2 className="serices__list-icon" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;