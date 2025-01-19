// src/App.js
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Scholastics from './components/Scholastics';
import Footer from './components/Footer';
import Chatbot from './Chatbot';
// Import other components as needed

const App = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Scholastics />
            <Footer />
            <Chatbot />
            {/* Add other sections here */}
        </div>
    );
};

export default App;
