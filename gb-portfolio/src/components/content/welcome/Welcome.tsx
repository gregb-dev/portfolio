import './Welcome.css';
import { useTranslation } from 'react-i18next';
import ArrowBlinkingButton from '../../buttons/arrow/ArrowBlinkingButton';

function Welcome() {

    const { t } = useTranslation();

    return (
        <>
            <div id='welcome'>
                <div className='content welcome-container'>
                    <div className='site-width'>
                        <div className='welcome-card'>
                            <h1 className='welcome-card-heading'>
                                {t('welcomeHeading.part1')}<span className='welcome-card-heading-bold'>{t('welcomeHeading.part2')}</span>{t('welcomeHeading.part3')}
                                {t('welcomeHeading.part4')}
                            </h1>
                        </div>
                        <div className='welcome-arrow-down'>
                            <ArrowBlinkingButton hashtagLink='/#quote' directionDown={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Welcome;