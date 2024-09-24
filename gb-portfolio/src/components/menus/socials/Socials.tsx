import './Socials.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Socials() {

    const { t } = useTranslation();

    return (
        <>
            <ul className="welcome-socials">
                <li className='welcome-socials-icons icon-email'></li>
                <li className='welcome-socials-icons icon-github'></li>
                <li className='welcome-socials-icons icon-linkedin'></li>
            </ul>
        </>
    )
}

export default Socials;