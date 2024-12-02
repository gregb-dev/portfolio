import { useTranslation } from 'react-i18next';
import ProjectHeader from "../components/banner/project-header/ProjectHeader";
import EcoleEnFolieMockup from '../assets/images/project-ecoleenfolie/macbook-mock-ecoleenfolie.png';
import ProjectSeparator from '../components/banner/project-separator/ProjectSeparator';

function ProjectEcoleEnFolie() {

    let separatorCounter = 1; // Initialize local counter for this page

    // Automatic counter for the project heading separator
    const getNextSeparatorNumber = (): number => {
        const current = separatorCounter;
        separatorCounter += 1;
        return current;
    };

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
            <div className='content'>
                <div>
                    <h1>Background</h1>
                    <p>{t('loremIpsum.part3')}</p>
                    <h2>Challenges</h2>
                    <p>{t('loremIpsum.part3')}</p>
                    <h2>What I accomplished</h2>
                    <p>{t('loremIpsum.part3')}</p>
                </div>
            </div>
            <ProjectSeparator number={getNextSeparatorNumber()} title={t('projectSeparator.define')} />
            <div className='content'></div>
            <ProjectSeparator number={getNextSeparatorNumber()} title={t('projectSeparator.ui')} />
            <div className='content'></div>
            <ProjectSeparator number={getNextSeparatorNumber()} title={t('projectSeparator.finalDesign')} />
            <div className='content'></div>
            <ProjectSeparator number={getNextSeparatorNumber()} title={t('projectSeparator.marketing')} />
            <div className='content'></div>
            <ProjectSeparator number={getNextSeparatorNumber()} title={t('projectSeparator.next')} />
            <div className='content'></div>
        </>
    )
};

export default ProjectEcoleEnFolie;