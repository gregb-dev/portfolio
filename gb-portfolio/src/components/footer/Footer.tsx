import './Footer.css';
import { useTranslation } from 'react-i18next';
import Socials from '../menus/socials/Socials';
import FooterLogo from '../../assets/logos/gb/gb-logomark-white.svg';

function Footer() {

    const { t } = useTranslation();

    return (
        <>
            <div id='footer'>
                <div className='content footer-container'>
                    <div className='footer-border'>
                        <img className='footer-logo' src={FooterLogo} alt='Gb Logo' />
                        <div className='footer'>
                            <div className='footer-nav'>
                                <ul className='footer-nav-site'>
                                    <li>{t('menu.home')}</li>
                                    <li>{t('menu.work')}</li>
                                    <li>{t('menu.about')}</li>
                                    <li>{t('menu.contact')}</li>
                                </ul>
                                <div className='footer-nav-socials'>
                                    <Socials
                                        isDarkIcons={false}
                                        size='36'
                                    />
                                </div>
                                <ul className='footer-nav-multilang'>
                                    <li>{t('menu.multiLang.english')}</li>
                                    <li>{t('menu.multiLang.french')}</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>{t('copyrights')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;