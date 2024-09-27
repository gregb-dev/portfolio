import './BurgerMenu.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import GBLogo from '../../../assets/logos/gb/gb-logomark.svg';
import Socials from '../socials/Socials';

function BurgerMenu() {

    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        if (!isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        closeMenu();
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <>
            <div className='burger-menu'>
                <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`menu ${isOpen ? 'open' : ''}`}>
                    <ul className='burger-menu-open'>
                        <li><img className='burger-menu-logo' src={GBLogo} alt='GB logo' /></li>
                        <li><HashLink smooth to='/#root' onClick={closeMenu}>{t('menu.home')}</HashLink></li>
                        <li><HashLink smooth to='/#work' onClick={closeMenu}>{t('menu.work')}</HashLink></li>
                        <li><Link to='/about' onClick={closeMenu}>{t('menu.about')}</Link></li>
                        <li><HashLink smooth to="/#contact" onClick={closeMenu}>{t('menu.contact')}</HashLink></li>
                    </ul>
                    <ul className='burger-menu-multilang'>
                        <li onClick={() => changeLanguage('en')}>{t('menu.multiLang.english')}</li>
                        <li onClick={() => changeLanguage('fr')}>{t('menu.multiLang.french')}</li>
                    </ul>
                    <Socials
                        isDarkIcons={true}
                        size='24'
                    />
                </nav>
            </div>
        </>
    );
};

export default BurgerMenu;
