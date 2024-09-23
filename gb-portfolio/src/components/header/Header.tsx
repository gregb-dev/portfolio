import './Header.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Header() {

    // Hook useTranslation from i18n in order to translate the text for our locale.
    const { t } = useTranslation();

    return (
        <>
            <ul id="header" className='container'>
                <li>
                    <Link to="/">
                        {t('name')}
                    </Link>
                </li>
                <li>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/project-recycmontreal">Recyc-Montreal</Link></li>
                        </ul>
                    </nav>
                </li>
            </ul>
        </>
    )
}

export default Header;