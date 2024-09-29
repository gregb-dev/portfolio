import './AboutDescription.css';
import { useTranslation } from 'react-i18next';
import ProfilePicture from '../../../assets/logos/gb/gb-logomark.svg';

function AboutBanner() {

    const { t } = useTranslation();

    return (
        <>
            <div className='content about-description-container'>
                <div className='about-description site-width'>
                    <div className='about-description-profile'>
                        <div className='about-description-pfp-container'>
                        </div>
                        <div className='about-description-text'>
                            <h1>MY JOURNEY</h1>
                            <p>{t('loremIpsum.part1')}</p>
                        </div>
                    </div>
                    <div className='about-about-description-workflow'>
                        <h1>WORKFLOW</h1>
                        <p>{t('loremIpsum.part2')}</p>
                        <div className='about-about-description-workflow-chart'>
                            <ul>
                                <li>Text</li>
                                <li>|</li>
                                <li>Text</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutBanner;