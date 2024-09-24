import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Socials from '../../menus/socials/Socials';

function Contact() {

    const { t } = useTranslation();

    return (
        <>
            <div id="contact">
                <h2>{t('heading.contact')} | {t('heading.contactSubheading')}</h2>
                <p>{t('contactMessage')}</p>
                <Socials />
            </div>
        </>
    )
}

export default Contact;