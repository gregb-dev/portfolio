import './Work.css';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../cards/project-card/ProjectCard';
import RecycMontrealMockup01 from '../../../assets/images/project-recycmontreal/iphone16-mock01.png';
import RecycMontrealMockup02 from '../../../assets/images/project-recycmontreal/iphone16-mock02.png';
import EcoleEnFolieMockup from '../../../assets/images/project-ecoleenfolie/macbook-mock.png';

function Work() {

    const { t } = useTranslation();

    return (
        <>
            <div id='work'>
                <div className='content work-container'>
                    <div className='site-width'>
                        <h1 className='heading'>{t('headings.work')}</h1>
                        <h2 className='subheading'>{t('headings.workSubheading')}</h2>
                        <div className='projects-layout'>
                            <div className='project-card-container'>
                                <ProjectCard
                                    name={t('projectCardRecycMontreal.name')}
                                    type={t('projectCardRecycMontreal.type')}
                                    description={t('projectCardRecycMontreal.description')}
                                    imageUrl1={RecycMontrealMockup01}
                                    imageUrl2={RecycMontrealMockup02}
                                    imageAlt={t('projectCardRecycMontreal.imageAlt')}
                                    href={t('projectCardRecycMontreal.href')}
                                    case='mobile'
                                    isProtected={true}
                                />
                            </div>
                            <div className='project-card-container'>
                                <ProjectCard
                                    name={t('projectCardEcoleEnFolie.name')}
                                    type={t('projectCardEcoleEnFolie.type')}
                                    description={t('projectCardEcoleEnFolie.description')}
                                    imageUrl1={EcoleEnFolieMockup}
                                    imageAlt={t('projectCardEcoleEnFolie.imageAlt')}
                                    href={t('projectCardEcoleEnFolie.href')}
                                    case='web'
                                    isProtected={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Work;