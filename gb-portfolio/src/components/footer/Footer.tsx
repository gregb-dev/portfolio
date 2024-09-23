import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    return (
        <>
            <div id="footer" className='full-height'>
                Footer
            </div>
        </>
    )
}

export default Footer;