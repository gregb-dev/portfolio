import Welcome from '../components/content/welcome/Welcome';
import Work from '../components/content/work/Work';
import Contact from '../components/content/contact/Contact';
import QuoteWithDelay from '../components/content/quote/QuoteWithDelay';

function Home() {

    return (
        <>
            <Welcome />
            <QuoteWithDelay />
            <Work />
            <Contact showFunFact={true} />
        </>
    )
};

export default Home;