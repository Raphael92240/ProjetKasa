import React from 'react';

import IMGabout from '@/Assets/Images/Pages/about/IMGabout.png';

import Collapsible from '@/Components/Collapsible/Collapsible';

import Banner from '@/Components/Banner/Banner.jsx';

import aboutinfo from "@/Assets/Api/About.json";

const About = () => {
    return (
        <section className="aboutsection">
            <Banner image={IMGabout} title="" />

            <ul className='liste-about'>
                { 
                    aboutinfo.map( info => {
                        return(
                            <Collapsible key={info.id} id={info.id} title={info.title} description={info.description} view="about"/>
                        )
                    }) 
                }
            </ul>
            
        </section>
    );
};

export default About;