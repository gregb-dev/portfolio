import './AboutWorkflowBubble.css';

interface AboutWorkflowBubbleProps {
    heading: string,
    subHeading?: string,
    description: string,
    imageUrl?: string
    imageAlt?: string
    endOfChart: boolean
}

function AboutWorkflowBubble(props: AboutWorkflowBubbleProps) {

    return (
        <>
            <ul className='about-workflow-bubble'>
                <li><h2>{props.heading}</h2></li>
                <li><h3>{props.subHeading}</h3></li>
                <li><p>{props.description}</p></li>
                {props.imageUrl && (
                    <li><div className='about-workflow-bubble-img-container'><img src={props.imageUrl} alt={props.imageAlt} /></div></li>
                )}
            </ul>
            {!props.endOfChart && (
                <div className='about-workflow-bubble-seperator'></div>
            )}
        </>
    )
};

export default AboutWorkflowBubble;