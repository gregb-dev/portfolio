import './AboutDescription.css';
import { useTranslation } from 'react-i18next';
import AboutWorkflowBubble from './AboutWorkflowBubble';
import ArrowBlinkingButton from '../../buttons/arrow/ArrowBlinkingButton';
import EmpathyImage from '../../../assets/images/workflow/empathy.png';
import AnalysisImage from '../../../assets/images/workflow/analysis.png';
import IdeaImage from '../../../assets/images/workflow/idea.png';
import PrototypingImage from '../../../assets/images/workflow/web-design.png';
import FeedbackImage from '../../../assets/images/workflow/feedback.png';
import IterationImage from '../../../assets/images/workflow/shapes.png';
import DesignImage from '../../../assets/images/workflow/mobile.png';
import OptimizationImage from '../../../assets/images/workflow/optimization.png';

function AboutBanner() {

    const { t } = useTranslation();

    return (
        <>
            <div className='content about-description-container'>
                <div className='about-description site-width'>
                    <div className='about-description-profile'>
                        {/*<div className='about-description-pfp-container'>
                        </div>*/}
                        <div className='about-description-text'>
                            <h1 className='about-description-subheading'>{t('aboutMe.bioHeading')}</h1>
                            <p>{t('aboutMe.bio')}</p>
                        </div>
                    </div>
                    <div className='about-about-description-workflow'>
                        <h2 className='about-description-subheading'>{t('aboutMe.workflowHeading')}</h2>
                        <p>{t('aboutMe.workflowText')}</p>
                        <div className='about-about-description-workflow-chart'>
                            <ul>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='01.'
                                        subHeading={t('workflow.empathy.heading')}
                                        description={t('workflow.empathy.text')}
                                        endOfChart={false}
                                        imageUrl={EmpathyImage}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='02.'
                                        subHeading={t('workflow.analysis.heading')}
                                        description={t('workflow.analysis.text')}
                                        endOfChart={false}
                                        imageUrl={AnalysisImage}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='03.'
                                        subHeading={t('workflow.concept.heading')}
                                        description={t('workflow.concept.text')}
                                        endOfChart={false}
                                        imageUrl={IdeaImage}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='04.'
                                        subHeading={t('workflow.prototyping.heading')}
                                        description={t('workflow.prototyping.text')}
                                        endOfChart={false}
                                        imageUrl={PrototypingImage}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='05.'
                                        subHeading={t('workflow.feedback.heading')}
                                        description={t('workflow.feedback.text')}
                                        endOfChart={false}
                                        imageUrl={FeedbackImage}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='06.'
                                        subHeading={t('workflow.refinement.heading')}
                                        description={t('workflow.refinement.text')}
                                        endOfChart={false}
                                        imageUrl={IterationImage}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='07.'
                                        subHeading={t('workflow.implementation.heading')}
                                        description={t('workflow.implementation.text')}
                                        endOfChart={false}
                                        imageUrl={DesignImage}
                                    />
                                </li>
                                <li>
                                    <AboutWorkflowBubble
                                        heading='08.'
                                        subHeading={t('workflow.postLaunch.heading')}
                                        description={t('workflow.postLaunch.text')}
                                        endOfChart={true}
                                        imageUrl={OptimizationImage}
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