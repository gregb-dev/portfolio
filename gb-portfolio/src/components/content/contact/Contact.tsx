import './Contact.css'
import { useTranslation } from 'react-i18next';
import Socials from '../../menus/socials/Socials';

function Contact() {

    const { t } = useTranslation();

    return (
        <>
            <div id="contact">
                <div className='content contact-container'>
                    <h2>{t('headings.contactSubheading')}</h2>
                    <p>{t('contactMessage')}</p>
                    <Socials />
                </div>
            </div>
        </>
    )
}

export default Contact;