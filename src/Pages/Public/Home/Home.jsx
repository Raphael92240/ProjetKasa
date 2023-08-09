import React from 'react';
import IMGhome from '@/Assets/Images/Pages/home/IMGhome.png';
//import { useNavigate } from 'react-router-dom';


const Home = () => {

   // let navigate =useNavigate()

    //const navgallery = (LogementId) => {
     //   navigate("../Logement/Logement"+LogementId,)
    //}
    
    // <a onClick={(e) =>navgallery(e)}> gallery</a>
    return (
        <section class="homepage">
            <section class="homebanniere">
                <img src={IMGhome} alt="about" />
                <p>Chez vous, partout et ailleurs</p>
            </section>
            <section class="homegallery">



            </section>
        </section>
    );
};

export default Home;