import { useTranslation } from 'react-i18next';
import ProjectCard from '../../cards/project-card/ProjectCard';

function Work() {

    const { t } = useTranslation();

    return (
        <>
            <div id="work" className='full-height'>
                <h2>{t('heading.work')} | {t('heading.workSubheading')}</h2>
                <ProjectCard
                    name={t('projectRecycMontreal.name')}
                    type={t('projectRecycMontreal.type')}
                    description={t('projectRecycMontreal.description')}
                    imageUrl={t('projectRecycMontreal.imageUrl')}
                    imageAlt={t('projectRecycMontreal.imageAlt')}
                    href={t('projectRecycMontreal.href')}
                />
                <ProjectCard
                    name={t('projectEcoleEnFolie.name')}
                    type={t('projectEcoleEnFolie.type')}
                    description={t('projectEcoleEnFolie.description')}
                    imageUrl={t('projectEcoleEnFolie.imageUrl')}
                    imageAlt={t('projectEcoleEnFolie.imageAlt')}
                    href={t('projectEcoleEnFolie.href')}
                />
            </div>
        </>
    )
}

export default Work;