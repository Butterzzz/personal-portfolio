import React from 'react';
import { BiBadgeCheck } from 'react-icons/bi';

function Other() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Прочее</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <BiBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Postman</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <BiBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">PhotoShop</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Other;