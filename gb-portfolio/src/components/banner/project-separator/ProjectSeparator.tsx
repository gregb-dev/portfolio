import './ProjectSeparator.css';

interface ProjectHeaderProps {
    number: number,
    title: string
}

function ProjectSeparator(props: ProjectHeaderProps) {

    return (
        <>
            <div className='project-separator'>
                <ul>
                    <li><h1 className='project-separator-heading'>{props.number}.</h1></li>
                    <li><h1 className='project-separator-heading'>{props.title}</h1></li>
                </ul>
            </div>
        </>
    )
}

export default ProjectSeparator;