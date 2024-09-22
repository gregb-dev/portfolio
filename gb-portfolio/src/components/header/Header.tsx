import './Header.css';
import { useTranslation } from 'react-i18next';

function Header() {

    // Hook useTranslation from i18n in order to translate the text for our locale.
    const { t } = useTranslation();

    return (
        <>
            <ul id="header" className='container'>
                <li>
                    <a href="/">
                        {/*<img className="img-logo" src={GBLogo} alt="GB logo" />*/}
                        {t('name')}
                    </a>
                </li>
                <li>
                    MENU
                </li>
            </ul>
        </>
    )
}

export default Header;