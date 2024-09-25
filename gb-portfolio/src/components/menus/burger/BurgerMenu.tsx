import './BurgerMenu.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function BurgerMenu() {

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                    <ul>
                        <li><HashLink smooth to='/#root' onClick={toggleMenu}>{t('menu.home')} </HashLink></li>
                        <li><HashLink smooth to='/#work' onClick={toggleMenu}>{t('menu.work')}</HashLink></li>
                        <li><Link to='/about' onClick={toggleMenu}>{t('menu.about')}</Link></li>
                        <li><HashLink smooth to="/#contact" onClick={toggleMenu}>{t('menu.contact')}</HashLink></li>
                        <ul>
                            <li>{t('menu.languages.english')}</li>
                            <li>{t('menu.languages.french')}</li>
                        </ul>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default BurgerMenu;
