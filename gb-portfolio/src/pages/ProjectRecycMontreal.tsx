import { useTranslation } from 'react-i18next';

function Home() {

    const { t } = useTranslation();

    return (
        <>
            <div>
                <h1>Recyc-Montréal</h1>
            </div>
        </>
    )
}

export default Home;