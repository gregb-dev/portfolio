import './Header.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import BurgerMenu from '../menus/burger/BurgerMenu';
import GBLogo from '../../assets/logos/gb/gb-logo-full.svg';

function Header() {

    // Hook useTranslation from i18n in order to translate the text for our locale.
    const { t } = useTranslation();

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path || location.hash === path;
    };

    // useState to check when we scroll in order to apply a style to our header
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
            <div id='header' className={`header-container ${scrolled ? 'scrolled' : ''}`}>
                <ul className='header site-width'>
                    <li>
                        <Link to='/'>
                            <img className='header-logo' src={GBLogo} alt='GB logo' />
                        </Link>
                    </li>
                    <li>
                        <nav>
                            <div className='header-burger-menu'>
                                {<BurgerMenu />}
                            </div>
                            <ul className='header-desktop-menu'>
                                <li><HashLink
                                    smooth to='/#root'
                                    className={isActive('/') ? 'active-link' : ''}
                                >
                                    {t('menu.home')}
                                </HashLink>
                                </li>
                                <li><HashLink smooth to='/#work'>{t('menu.work')}</HashLink></li>
                                <li><Link
                                    to='/about'
                                    className={isActive('/about') ? 'active-link' : ''}
                                >
                                    {t('menu.about')}
                                </Link>
                                </li>
                                <li><HashLink smooth to="/#contact">{t('menu.contact')}</HashLink></li>
                            </ul>
                        </nav>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default Header;