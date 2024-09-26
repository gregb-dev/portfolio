import './Work.css';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../cards/project-card/ProjectCard';
import RecycMontrealMockup01 from '../../../assets/images/project-recycmontreal/iphone16-mock01.png';
import RecycMontrealMockup02 from '../../../assets/images/project-recycmontreal/iphone16-mock02.png';

function Work() {

    const { t } = useTranslation();

    return (
        <>
            <div id='work'>
                <div className='content work-container'>
                    <h2 className='subheading'><span className='subheading-bold'>{t('headings.work')}</span> | {t('headings.workSubheading')}</h2>
                    <div>
                        <ProjectCard
                            name={t('projectRecycMontreal.name')}
                            type={t('projectRecycMontreal.type')}
                            description={t('projectRecycMontreal.description')}
                            imageUrl1={RecycMontrealMockup01}
                            imageUrl2={RecycMontrealMockup02}
                            imageAlt={t('projectRecycMontreal.imageAlt')}
                            href={t('projectRecycMontreal.href')}
                        />
                    </div>

                    {/*<ProjectCard
                        name={t('projectEcoleEnFolie.name')}
                        type={t('projectEcoleEnFolie.type')}
                        description={t('projectEcoleEnFolie.description')}
                        imageUrl={t('projectEcoleEnFolie.imageUrl')}
                        imageAlt={t('projectEcoleEnFolie.imageAlt')}
                        href={t('projectEcoleEnFolie.href')}
                    />*/}
                </div>
            </div>
        </>
    )
}

export default Work;