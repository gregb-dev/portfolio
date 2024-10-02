import './ArrowBlinkingButton.css';
import { HashLink } from 'react-router-hash-link';

interface ArrowBlinkingButtonProps {
    hashtagLink: string
    directionDown: boolean
}

function ArrowBlinkingButton(props: ArrowBlinkingButtonProps) {

    return (
        <>
            <HashLink smooth to={props.hashtagLink}>
                <div className='arrow-btn-outline'>
                    <div className='arrow-container'>
                        {props.directionDown ? (
                            <>
                                <span className='arrow first-arrow arrow-icon-down'></span>
                                <span className='arrow second-arrow arrow-icon-down'></span>
                            </>
                        ) : (
                            <>
                                <span className='arrow first-arrow arrow-icon-up'></span>
                                <span className='arrow second-arrow arrow-icon-up'></span>
                            </>
                        )}
                    </div>
                </div>
            </HashLink>
        </>
    )
};

export default ArrowBlinkingButton;