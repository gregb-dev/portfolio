import './Header.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BurgerMenu from '../menus/burger/BurgerMenu';
import GBLogo from '../../assets/logos/gb/gb-logo-full.svg';

function Header() {

    // Hook useTranslation from i18n in order to translate the text for our locale.
    const { t } = useTranslation();

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
                            {<BurgerMenu />}
                        </nav>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default Header;