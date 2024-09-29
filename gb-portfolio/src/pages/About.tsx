import AboutBanner from '../components/content/about/AboutBanner';
import AboutDescription from '../components/content/about/AboutDescription';
import Contact from '../components/content/contact/Contact';

function About() {

    return (
        <>
            <div id='about'>
                <AboutBanner />
                <AboutDescription />
            </div>
            <Contact showFunFact={false} />
        </>
    )
};

export default About;