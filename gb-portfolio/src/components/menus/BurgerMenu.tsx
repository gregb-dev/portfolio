import './BurgerMenu.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu open or closed
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { t } = useTranslation();

    return (
        <div className="burger-menu">
            {/* Burger Icon */}
            <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Drawer Menu */}
            <div className={`menu-drawer ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">{t('menu.home')}</Link></li>
                    <li><HashLink smooth to="/#work">{t('menu.work')}</HashLink></li>
                    <li><Link to="/">{t('menu.about')}</Link></li>
                    <li><HashLink smooth to="/#contact">{t('menu.contact')}</HashLink></li>
                </ul>
            </div>
        </div>
    );
}

export default BurgerMenu;
