import './Welcome.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GBLogo from '../../../assets/logos/gb-logo.png';

function Welcome() {

    const { t } = useTranslation();

    return (
        <>
            <div id="welcome" className="container-content">
                <div className="container-welcome-details">
                    {/*<div className='container-welcome-logo'><img src={GBLogo} alt="Greg Berthold logo" /></div>*/}
                    <h2 className='welcome-name'>{t('name')} {t('familyName')}</h2>
                    <p>{t('welcomeMessage1')}</p>
                    <p>{t('welcomeMessage2')}</p>
                    <ul className="welcome-socials">
                        <li className='welcome-socials-icons icon-email'></li>
                        <li className='welcome-socials-icons icon-github'></li>
                        <li className='welcome-socials-icons icon-linkedin'></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Welcome;