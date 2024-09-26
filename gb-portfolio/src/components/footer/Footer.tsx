import './Footer.css';
import { useTranslation } from 'react-i18next';
import Socials from '../menus/socials/Socials';

function Footer() {

    const { t } = useTranslation();

    return (
        <>
            <div id='footer'>
                <div className='content footer-container'>
                    <div>
                        <ul>
                            <li>B</li>
                            <li>Greg Berthold</li>
                        </ul>
                        <ul>
                            <li>{t('menu.home')}</li>
                            <li>{t('menu.work')}</li>
                            <li>{t('menu.about')}</li>
                            <li>{t('menu.contact')}</li>
                            <ul>
                                <li>{t('menu.multiLang.english')}</li>
                                <li>{t('menu.multiLang.french')}</li>
                            </ul>
                        </ul>
                        <Socials
                            isDarkIcons={false}
                            size='36'
                        />
                    </div>
                    <div>
                        <p>{t('funFact.label')} : {t('funFact.message')}</p>
                        <p>{t('copyrights')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;