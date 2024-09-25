import './ArrowDown.css';
import { HashLink } from 'react-router-hash-link';

interface ArrowDownProps {
    hastagLink: string
}

function ArrowDown(props: ArrowDownProps) {

    return (
        <>
            <HashLink smooth to={props.hastagLink}>
                <div className='btn-arrow-outline'>
                    <div className='container-arrow'>
                        <span className='arrow first arrow-down'></span>
                        <span className='arrow second arrow-down'></span>
                    </div>
                </div>
            </HashLink>
        </>
    )
};

export default ArrowDown;