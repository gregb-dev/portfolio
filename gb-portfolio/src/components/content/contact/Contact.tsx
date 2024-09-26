import './Contact.css'
import { useTranslation } from 'react-i18next';
import Socials from '../../menus/socials/Socials';

function Contact() {

    const { t } = useTranslation();

    return (
        <>
            <div id='contact'>
                <div className='content contact-container'>
                    <h2>{t('headings.contactSubheading')}</h2>
                    <div className='contact-message'>
                        <p>{t('contactMessage.part1')}</p>
                        <p>{t('contactMessage.part2')}</p>
                    </div>
                    <div className="contact-social-links">
                        <Socials
                            isDarkIcons={false}
                            size='36'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;