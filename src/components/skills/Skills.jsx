import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Other from './Other';

function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Навыки</h2>
            <div className="section__subtitle">Мои технические знания</div>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Other />
            </div>
        </section>
    )
}

export default Skills;