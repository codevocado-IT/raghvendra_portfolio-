// src/App.js
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
// Import other components as needed

const App = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <About />
            <Skills />
            {/* Add other sections here */}
        </div>
    );
};

export default App;
