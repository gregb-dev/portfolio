import './AboutDescription.css';
import { useTranslation } from 'react-i18next';
import AboutWorkflowBubble from './AboutWorkflowBubble';
import ArrowBlinkingButton from '../../buttons/arrow/ArrowBlinkingButton';

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
                                <li>
                                    <AboutWorkflowBubble
                                        heading='01.'
                                        subHeading='Empathy & User Research'
                                        description={t('loremIpsum.part3')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='02.'
                                        subHeading='Problem Identification & Analysis'
                                        description={t('loremIpsum.part3')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='03.'
                                        subHeading='Problem Identification & Analysis'
                                        description={t('loremIpsum.part3')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='04.'
                                        subHeading='Problem Identification & Analysis'
                                        description={t('loremIpsum.part3')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='05.'
                                        subHeading='Problem Identification & Analysis'
                                        description={t('loremIpsum.part3')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='06.'
                                        subHeading='Problem Identification & Analysis'
                                        description={t('loremIpsum.part3')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='07.'
                                        subHeading='Problem Identification & Analysis'
                                        description={t('loremIpsum.part3')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='08.'
                                        subHeading='Problem Identification & Analysis'
                                        description={t('loremIpsum.part3')}
                                        endOfChart={true}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='scroll-arrow-right'>
                        <ArrowBlinkingButton hashtagLink='/about#root' directionDown={false} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutBanner;