import React from 'react';
import Banner from '../../../banner/Banner';
import Services from '../../services/Services';
import About from '../../about/About';
import Skill from '../../skill/skill';
import Contact from '../../contact/Contact';
import Projects from '../../projects/Projects';

const Home = () => {
    return (
          <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;