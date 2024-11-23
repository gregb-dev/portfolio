import './ProjectHeader.css';
import { useTranslation } from 'react-i18next';

interface ProjectHeaderProps {
    name: string,
    tag?: string,
    description: string,
    imageUrl1: string,
    imageUrl2?: string,
    imageAlt: string,
    case: string,
    role: string,
    timeline: string
}

function ProjectHeader(props: ProjectHeaderProps) {

    const { t } = useTranslation();

    return (
        <>
            <div className='project-header'>
                <div className='project-header-info-container'>
                    <h1>{props.name}</h1>
                    {props.tag && (<h2>{props.tag}</h2>)}
                    <ul>
                        <li>
                            <h3>{t('projectHeaderLabels.overview')}</h3>
                            <p>{props.description}</p>
                        </li>
                        <li>
                            <h3>{t('projectHeaderLabels.role')}</h3>
                            <p>{props.role}</p>
                        </li>
                        <li>
                            <h3>{t('projectHeaderLabels.timeline')}</h3>
                            <p>{props.timeline}</p>
                        </li>
                    </ul>
                </div>
                {props.case === 'web' && (
                    <div className='projet-header-image-container'>
                        <div className='projet-header-laptop'>
                            <img className='projet-header-device-img' src={props.imageUrl1} alt={props.imageAlt} />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProjectHeader;