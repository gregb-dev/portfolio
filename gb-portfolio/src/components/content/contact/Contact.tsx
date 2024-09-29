import './Contact.css'
import { useTranslation } from 'react-i18next';
import Socials from '../../menus/socials/Socials';

interface ContactProps {
    showFunFact: boolean
}

function Contact(props: ContactProps) {

    const { t } = useTranslation();

    return (
        <>
            <div id='contact'>
                <div className='content contact-container'>
                    <div className='site-width'>
                        <h1>{t('headings.contactSubheading')}</h1>
                        <div className='contact-message'>
                            <p>{t('contactMessage.part1')}</p>
                            <p>{t('contactMessage.part2')}</p>
                        </div>
                        <div className='contact-social-links'>
                            <Socials
                                isDarkIcons={false}
                                size='36'
                            />
                        </div>
                        {props.showFunFact && (
                            <>
                                <h3 className='contact-fun-fact-heading'>{t('funFact.label')}</h3>
                                <p className='contact-fun-fact-text'>{t('funFact.message')}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;