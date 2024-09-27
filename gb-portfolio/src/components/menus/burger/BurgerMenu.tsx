import './BurgerMenu.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import GBLogo from '../../../assets/logos/gb/gb-logomark.svg';

function BurgerMenu() {

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        if (!isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
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
                        <li><HashLink smooth to='/#root' onClick={toggleMenu}>{t('menu.home')}</HashLink></li>
                        <li><HashLink smooth to='/#work' onClick={toggleMenu}>{t('menu.work')}</HashLink></li>
                        <li><Link to='/about' onClick={toggleMenu}>{t('menu.about')}</Link></li>
                        <li><HashLink smooth to="/#contact" onClick={toggleMenu}>{t('menu.contact')}</HashLink></li>
                    </ul>
                    <ul className='burger-menu-multilang'>
                        <li>{t('menu.multiLang.english')}</li>
                        <li>{t('menu.multiLang.french')}</li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default BurgerMenu;
