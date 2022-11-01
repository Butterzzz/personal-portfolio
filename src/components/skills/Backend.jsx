import React from 'react';
import { BiBadgeCheck } from 'react-icons/bi';

function Backend() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <BiBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">NodeJS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">ExpressJS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Backend;