import './ProjectCard.css';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    name: string,
    type: string,
    description: string,
    imageUrl1: string,
    imageUrl2: string,
    imageAlt: string,
    href: string
}

function ProjectCard(props: ProjectCardProps) {
    return (
        <>
            <div className='project-card'>
                <Link to={props.href}>
                    <div className='img-square-box'>
                        <div className='project-card-img-container'>
                            <div className='iphone'>
                                <img className='iphone-img' src={props.imageUrl1} alt={props.imageAlt} />
                            </div>
                            <div className='iphone iphone-lower'>
                                <img className='iphone-img' src={props.imageUrl2} alt={props.imageAlt} />
                            </div>
                        </div>
                    </div>
                </Link>
                <div className='project-card-text-container'>
                    <Link to={props.href}>
                        <h3 className='project-card-heading'>{props.name}</h3>
                    </Link>
                    <p className='project-card-type'>{props.type}</p>
                    <p className='project-card-description'>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;