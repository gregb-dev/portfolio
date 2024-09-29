import { useTranslation } from 'react-i18next';
import AboutBanner from '../components/content/about/AboutBanner';
import AboutDescription from '../components/content/about/AboutDescription';

function About() {

    const { t } = useTranslation();

    return (
        <>
            <div id='about'>
                <AboutBanner />
                <AboutDescription />
            </div>
        </>
    )
};

export default About;