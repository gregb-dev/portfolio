import './ProjectCard.css';

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
                    <a href={props.href}>
                        <div className='container-card-project-img'>
                            <img className="card-project-img" src={props.imageUrl} alt={props.imageAlt} />
                        </div>
                    </a>
                    <div className='container-card-project-text'>
                        <a href={props.href}>
                            <h3>{props.name}</h3>
                        </a>
                        <p>{props.type}</p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;