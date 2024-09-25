import './ArrowDownButton.css';
import { HashLink } from 'react-router-hash-link';

interface ArrowDownButtonProps {
    hashtagLink: string
}

function ArrowDownButton(props: ArrowDownButtonProps) {

    return (
        <>
            <HashLink smooth to={props.hashtagLink}>
                <div className='arrow-btn-outline'>
                    <div className='arrow-container'>
                        <span className='arrow first-arrow arrow-icon'></span>
                        <span className='arrow second-arrow arrow-icon'></span>
                    </div>
                </div>
            </HashLink>
        </>
    )
};

export default ArrowDownButton;