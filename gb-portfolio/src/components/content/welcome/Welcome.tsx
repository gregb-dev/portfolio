import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Home() {

    const { t } = useTranslation();

    return (
        <>
            <div id="welcome" className='full-height'>
                Hi, I'm Greg.
            </div>
        </>
    )
}

export default Home;