import React from 'react';
import IMGhome from '@/Assets/Images/Pages/home/IMGhome.png';
import listelogement  from '@/Assets/Api/Logement.json';

import Banner from '@/Components/Banner/Banner.jsx';
import Card from '@/Components/Card/Card.jsx';




const Home = () => {

    return (
        <section className="homepage">
            <Banner image={IMGhome} title="Chez vous, partout et ailleurs" />
            
                <ul className='liste-logements'>

                { 
                    listelogement.map( logement => {
                        return(
                                <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
                        )
                    }) 
                }
                </ul>
        
          
        </section>
    );
};

export default Home;