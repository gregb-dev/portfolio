import './BurgerMenu.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import GBLogo from '../../../assets/logos/gb/gb-logomark.svg';
import Socials from '../socials/Socials';

function BurgerMenu() {

    const { t, i18n } = useTranslation();

    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path || location.hash === path;
    };

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
                        <li className='burger-menu-logo-bar'><img className='burger-menu-logo' src={GBLogo} alt='GB logo' /></li>
                        <li className='burger-menu-item'><HashLink className={isActive('/') ? 'active-link' : ''} smooth to='/#root' onClick={closeMenu}>{t('menu.home')}</HashLink></li>
                        <li className='burger-menu-item'><HashLink smooth to='/#work' onClick={closeMenu}>{t('menu.work')}</HashLink></li>
                        <li className='burger-menu-item'><Link className={isActive('/about') ? 'active-link' : ''} to='/about' onClick={closeMenu}>{t('menu.about')}</Link></li>
                        <li id='burger-menu-item-last' className='burger-menu-item'><HashLink smooth to="/#contact" onClick={closeMenu}>{t('menu.contact')}</HashLink></li>
                        <ul className='burger-menu-multilang'>
                            <li id='burger-menu-multilang-first' onClick={() => changeLanguage('en')}>{t('menu.multiLang.english')}</li>
                            <li onClick={() => changeLanguage('fr')}>{t('menu.multiLang.french')}</li>
                        </ul>
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
