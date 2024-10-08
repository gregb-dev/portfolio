import './Footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Socials from '../menus/socials/Socials';
import FooterLogo from '../../assets/logos/gb/gb-logomark-white.svg';

function Footer() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <div id='footer'>
                <div className='content footer-container'>
                    <div className='footer-border site-width'>
                        <img className='footer-logo' src={FooterLogo} alt='Gb Logo' />
                        <div className='footer'>
                            <div className='footer-nav'>
                                <ul className='footer-nav-section footer-nav-site'>
                                    <li className='footer-label'>{t('footerLabels.navigation')}</li>
                                    <li className='footer-nav-item'><HashLink smooth to='/#root'>{t('menu.home')}</HashLink></li>
                                    <li className='footer-nav-item'><HashLink smooth to='/#work'>{t('menu.work')}</HashLink></li>
                                    <li className='footer-nav-item'><Link to='/about'>{t('menu.about')}</Link></li>
                                    <li className='footer-nav-item'><HashLink smooth to="/#contact">{t('menu.contact')}</HashLink></li>
                                </ul>
                                <div className='footer-nav-section footer-nav-socials'>
                                    <ul>
                                        <li className='footer-label'>{t('footerLabels.socials')}</li>
                                        <li>
                                            <Socials
                                                isDarkIcons={false}
                                                size='24'
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <ul className='footer-nav-section footer-nav-multilang'>
                                    <li className='footer-label'>{t('footerLabels.multiLang')}</li>
                                    <li className='footer-multilang-btn footer-nav-item' onClick={() => changeLanguage('en')}>{t('menu.multiLang.english')}</li>
                                    <li className='footer-multilang-btn footer-nav-item' onClick={() => changeLanguage('fr')}>{t('menu.multiLang.french')}</li>
                                </ul>
                            </div>
                            <div>
                                <p className='footer-attribution'><a href='https://www.flaticon.com/authors/becris' target='_blank' rel='external noopener noreferrer'>{t('attribution.becris')}</a></p>
                                <p className='footer-copyrights'>{t('copyrights')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;