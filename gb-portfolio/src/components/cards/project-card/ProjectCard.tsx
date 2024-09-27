import './ProjectCard.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    name: string,
    type: string,
    description: string,
    imageUrl1: string,
    imageUrl2?: string,
    imageAlt: string,
    href: string
    case: string
    isProtected: boolean
}

function ProjectCard(props: ProjectCardProps) {

    const { t } = useTranslation();

    const isProtected = props.isProtected ? '' : ' hide-warning';

    return (
        <>
            <div className='project-card'>
                <Link to={props.href}>
                    <div className='img-square-box'>
                        {props.case === 'mobile' && (
                            <div className='project-card-img-container'>
                                <div className='iphone'>
                                    <img className='device-img' src={props.imageUrl1} alt={props.imageAlt} />
                                </div>
                                <div className='iphone iphone-lower'>
                                    <img className='device-img' src={props.imageUrl2} alt={props.imageAlt} />
                                </div>
                            </div>
                        )}
                        {props.case === 'web' && (
                            <div className='project-card-img-container'>
                                <div className='laptop'>
                                    <img className='device-img' src={props.imageUrl1} alt={props.imageAlt} />
                                </div>
                            </div>
                        )}
                    </div>
                </Link>
                <div className='project-card-text-container'>
                    <Link to={props.href}>
                        <h3 className='project-card-heading'>{props.name}</h3>
                    </Link>
                    <p className='project-card-type'>{props.type}</p>
                    <p className='project-card-description'>{props.description}</p>
                    <p className={`warning-message${isProtected}`}>{t('projectWarning')}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;