import React from 'react';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Hero />
            <MySkills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;