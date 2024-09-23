import ProjectCard from '../components/cards/project-card/ProjectCard';
import { useTranslation } from 'react-i18next';

function Home() {

    const { t } = useTranslation();

    return (
        <>
            <div>
                <ProjectCard
                    name={t('projectRecycMontreal.name')}
                    type={t('projectRecycMontreal.type')}
                    description={t('projectRecycMontreal.description')}
                    imageUrl={t('projectRecycMontreal.imageUrl')}
                    imageAlt={t('projectRecycMontreal.imageAlt')}
                    href={t('projectRecycMontreal.href')}
                />
            </div>
        </>
    )
}

export default Home;