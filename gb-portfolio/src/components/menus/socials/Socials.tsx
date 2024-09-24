import './Socials.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Socials() {

    const { t } = useTranslation();

    return (
        <>
            <ul className="welcome-socials">
                <li className='welcome-socials-icons icon-email'><a href="mailto:greg.berthold@outlook.com"></a></li>
                <li className='welcome-socials-icons icon-github'><a href="https://github.com/gregb-dev" target='_blank' rel="external noopener noreferrer"></a></li>
                <li className='welcome-socials-icons icon-linkedin'><a href="https://www.linkedin.com/in/gregberthold" target='_blank' rel="external noopener noreferrer"></a></li>
            </ul>
        </>
    )
}

export default Socials;