import './ComingSoon.css';
import GBLogo from '../../../assets/logos/gb/gb-logomark-white.svg';

function ComingSoon() {
    return (
        <>
            <div className='content coming-soon-container'>
                <img src={GBLogo} />
                <h1>Website Coming Soon!</h1>
                <p>We're working on something amazing!</p>
                <br /><br />
                <h1>Site web bientôt disponible!</h1>
                <p>Nous préparons quelque chose d'incroyable!</p>
            </div>
        </>
    )
};

export default ComingSoon;