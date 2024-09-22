import './styles/App.css';
// Import the i18n configuration in order to have various languages in the app.
import './i18n';
import Home from './pages/Home';
import Header from './components/header/Header';

function App() {

    return (
        <>
            <Header />
            <Home />
        </>
    )
}

export default App;
