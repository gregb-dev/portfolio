import './Welcome.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GBLogo from '../../../assets/logos/gb-logo.png';
import Socials from '../../menus/socials/Socials';

function Welcome() {

    const { t } = useTranslation();

    return (
        <>
            <div id="welcome">
                <div className="container-welcome-details">
                    {/*<div className='container-welcome-logo'><img src={GBLogo} alt="Greg Berthold logo" /></div>*/}
                    <h1 className='welcome-name'>{t('name')} {t('familyName')}</h1>
                    <p>{t('welcomeMessage1')}</p>
                    <p>{t('welcomeMessage2')}</p>
                    <Socials />
                </div>
            </div>
        </>
    )
}

export default Welcome;