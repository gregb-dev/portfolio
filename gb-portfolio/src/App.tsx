// Styles
import './styles/App.css';
// React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import the i18n configuration in order to have various languages in the app.
import './i18n';
// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// Pages
import Home from './pages/Home';
import ProjectRecycMontreal from './pages/ProjectRecycMontreal';
import ProjectEcoleEnFolie from './pages/ProjectEcoleEnFolie';
import About from './pages/About';
// Hooks
import ScrollToTop from './hooks/ScrollToTop';

function App() {

    return (
        <>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='/project-recycmontreal' element={< ProjectRecycMontreal />} />
                    <Route path='/project-ecoleenfolie' element={< ProjectEcoleEnFolie />} />
                    <Route path='/about' element={< About />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
};

export default App;
