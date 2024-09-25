import './Welcome.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowDown from '../../buttons/arrow/ArrowDown';

function Welcome() {

    const { t } = useTranslation();

    return (
        <>
            <div id='welcome'>
                <div className='container-content container-welcome'>
                    <div className='container-welcome-details'>
                        <h1 className="heading">
                            {t('welcomeMessage.part1')} <span className='heading-bold'>{t('welcomeMessage.part2')}</span> — {t('welcomeMessage.part3')}
                            <br /> {t('welcomeMessage.part4')}
                        </h1>
                    </div>
                    <div className='welcome-arrow-down'>
                        <ArrowDown hastagLink='/#quote' />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Welcome;