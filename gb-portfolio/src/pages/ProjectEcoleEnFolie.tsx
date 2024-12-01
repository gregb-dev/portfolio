import { useTranslation } from 'react-i18next';
import ProjectHeader from "../components/banner/ProjectHeader";
import EcoleEnFolieMockup from '../assets/images/project-ecoleenfolie/macbook-mock-ecoleenfolie.png';

function ProjectEcoleEnFolie() {

    const { t } = useTranslation();

    return (
        <>
            <div id='project-ecoleenfolie'>
                <ProjectHeader
                    name={t('projectCardEcoleEnFolie.name')}
                    description={t('projectCardEcoleEnFolie.description')}
                    imageUrl1={EcoleEnFolieMockup}
                    imageAlt={t('projectCardEcoleEnFolie.imageAlt')}
                    case='web'
                    role={t('projectCardEcoleEnFolie.role')}
                    timeline={t('projectCardEcoleEnFolie.timeline')}
                />
            </div>
        </>
    )
};

export default ProjectEcoleEnFolie;