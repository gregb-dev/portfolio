import './Header.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BurgerMenu from '../menus/burger/BurgerMenu';


function Header() {

    // Hook useTranslation from i18n in order to translate the text for our locale.
    const { t } = useTranslation();

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="header" className={`header ${scrolled ? 'scrolled' : ''}`}>
                <ul >
                    <li>
                        <p className='header-name'>B</p>
                        {/*<Link to="/">
                        {t('name')}
                    </Link>*/}
                    </li>
                    <li>
                        <nav>
                            {<BurgerMenu />}
                            {/*<ul className="desktop-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/project-recycmontreal">Recyc-Montreal</Link></li>
                        </ul>*/}
                        </nav>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;