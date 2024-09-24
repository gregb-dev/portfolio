import Socials from '../menus/socials/Socials';
import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    return (
        <>
            <div id="footer" className='full-height'>
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
                            <li>{t('menu.languages.english')}</li>
                            <li>{t('menu.languages.french')}</li>
                        </ul>
                    </ul>
                    <Socials />
                </div>
                <div>
                    <p>{t('funFact.label')} : {t('funFact.message')}</p>
                    <p>{t('copyrights')}</p>
                </div>
            </div>
        </>
    )
}

export default Footer;