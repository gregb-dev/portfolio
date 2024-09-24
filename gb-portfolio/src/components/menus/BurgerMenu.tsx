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
        <>
            <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </>
    );
}

export default BurgerMenu;
