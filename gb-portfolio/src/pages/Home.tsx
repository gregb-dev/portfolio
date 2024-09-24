import { useTranslation } from 'react-i18next';
import Welcome from '../components/content/welcome/Welcome';
import Work from '../components/content/work/Work';
import Contact from '../components/content/contact/Contact';
import Quote from '../components/content/quote/Quote';
import QuoteWithDelay from '../components/content/quote/QuoteWithDelay';

function Home() {

    const { t } = useTranslation();

    return (
        <>
            <Welcome />
            <QuoteWithDelay />
            <Work />
            <Contact />
        </>
    )
}

export default Home;