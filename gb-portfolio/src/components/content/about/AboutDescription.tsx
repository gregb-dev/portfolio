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
                            <h1>{t('aboutMe.bioHeading')}</h1>
                            <p>{t('aboutMe.bio')}</p>
                        </div>
                    </div>
                    <div className='about-about-description-workflow'>
                        <h1>{t('aboutMe.workflowHeading')}</h1>
                        <p>{t('aboutMe.workflowText')}</p>
                        <div className='about-about-description-workflow-chart'>
                            <ul>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='01.'
                                        subHeading={t('workflow.empathy.heading')}
                                        description={t('workflow.empathy.text')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='02.'
                                        subHeading={t('workflow.analysis.heading')}
                                        description={t('workflow.analysis.text')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='03.'
                                        subHeading={t('workflow.concept.heading')}
                                        description={t('workflow.concept.text')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='04.'
                                        subHeading={t('workflow.prototyping.heading')}
                                        description={t('workflow.prototyping.text')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='05.'
                                        subHeading={t('workflow.feedback.heading')}
                                        description={t('workflow.feedback.text')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='06.'
                                        subHeading={t('workflow.refinement.heading')}
                                        description={t('workflow.refinement.text')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='07.'
                                        subHeading={t('workflow.implementation.heading')}
                                        description={t('workflow.implementation.text')}
                                        endOfChart={false}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='08.'
                                        subHeading={t('workflow.postLaunch.heading')}
                                        description={t('workflow.postLaunch.text')}
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