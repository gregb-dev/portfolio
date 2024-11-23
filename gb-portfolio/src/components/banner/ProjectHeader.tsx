import './ProjectHeader.css';

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

    return (
        <>
            <div className='project-header'>
                <div className='project-header-info-container'>
                    <h1>{props.name}</h1>
                    {props.tag && (<h2>{props.tag}</h2>)}
                    <ul>
                        <li>
                            <h3>Overview</h3>
                            <p>{props.description}</p>
                        </li>
                        <li>
                            <h3>Role</h3>
                            <p>{props.role}</p>
                        </li>
                        <li>
                            <h3>Timeline</h3>
                            <p>{props.timeline}</p>
                        </li>
                    </ul>
                </div>
                <div className='projet-header-image-container'>

                </div>
            </div>
        </>
    )
}

export default ProjectHeader;