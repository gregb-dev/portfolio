import './Socials.css';
import EmailIconDark from '../../../assets/logos/socials/google-mail-black.png';
import EmailIconLight from '../../../assets/logos/socials/google-mail-white.png';
import GithubIconDark from '../../../assets/logos/socials/github-mark-black.png';
import GithubIconLight from '../../../assets/logos/socials/github-mark-white.png';
import LinkedinbIconDark from '../../../assets/logos/socials/linkedin-black.png';
import LinkedinbIconLight from '../../../assets/logos/socials/linkedin-white.png';

interface SocialsProps {
    isDarkIcons: boolean
}

function Socials(props: SocialsProps) {

    const emailIcon = props.isDarkIcons ? EmailIconDark : EmailIconLight;
    const githubIcon = props.isDarkIcons ? GithubIconDark : GithubIconLight;
    const linkedinIcon = props.isDarkIcons ? LinkedinbIconDark : LinkedinbIconLight;

    return (
        <>
            <ul className='welcome-socials'>
                <li>
                    <a href='mailto:greg.berthold@outlook.com'>
                        <img className='welcome-socials-icon' src={emailIcon} alt='E-mail' />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/gregb-dev' target='_blank' rel='external noopener noreferrer'>
                        <img className='welcome-socials-icon' src={githubIcon} alt='GitHub' />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/gregberthold' target='_blank' rel='external noopener noreferrer'>
                        <img className='welcome-socials-icon' src={linkedinIcon} alt='LinkedIn' />
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Socials;