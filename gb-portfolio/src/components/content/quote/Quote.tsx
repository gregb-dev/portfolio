import './Quote.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Quote() {

    const { t } = useTranslation();

    return (
        <>
            <div id="quote">
                <h1>{t('quote')}</h1>
            </div>
        </>
    )
}

export default Quote;