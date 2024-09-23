import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
// Import the i18n configuration in order to have various languages in the app.
import './i18n';
// Components
import Header from './components/header/Header';
// Pages
import Home from './pages/Home';
import ProjectRecycMontreal from './pages/ProjectRecycMontreal';

function App() {

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/project-recycmontreal" element={< ProjectRecycMontreal />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
