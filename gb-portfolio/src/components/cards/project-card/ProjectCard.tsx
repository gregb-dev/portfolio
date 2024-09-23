import './ProjectCard.css';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    name: string,
    type: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
    href: string
}

function ProjectCard(props: ProjectCardProps) {
    return (
        <>
            <div className='container-card-project'>
                <div className='card-project'>
                    <Link to={props.href}>
                        <div className='container-card-project-img'>
                            <img className="card-project-img" src={props.imageUrl} alt={props.imageAlt} />
                        </div>
                    </Link>
                    <div className='container-card-project-text'>
                        <Link to={props.href}>
                            <h3>{props.name}</h3>
                        </Link>
                        <p>{props.type}</p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;