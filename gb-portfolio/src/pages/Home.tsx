import { useTranslation } from 'react-i18next';
import Welcome from '../components/content/welcome/Welcome';
import Work from '../components/content/work/Work';
import Contact from '../components/content/contact/Contact';

function Home() {

    const { t } = useTranslation();

    return (
        <>
            <Welcome />
            <Work />
            <Contact />
        </>
    )
}

export default Home;