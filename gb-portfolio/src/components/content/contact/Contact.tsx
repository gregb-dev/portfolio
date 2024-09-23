import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation();

    return (
        <>
            <div id="contact" className='full-height'>
                Let's connect.
            </div>
        </>
    )
}

export default Contact;