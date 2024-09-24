import './Welcome.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GBLogo from '../../../assets/logos/gb-logo.png';

function Home() {

    const { t } = useTranslation();

    return (
        <>
            <div id="welcome" className="container-content">
                <div className="container-welcome-details">
                    <div className='container-welcome-logo'><img src={GBLogo} alt="Greg Berthold logo" /></div>
                    <h2 className='welcome-name'>{t('name')} {t('familyName')}</h2>
                    <h3 className='welcome-name'>Full-stack developer</h3>
                    <p>{t('welcomeMessage')}</p>
                    <ul className="welcome-socials">
                        <li>Email</li>
                        <li>GitHub</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home;