import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LogementService } from '@/_Services/Logements.service';

import Slideshow from '@/Components/Slideshow/Slideshow';
import Profil from '@/Components/Profil/Profil';
import Rating from '@/Components/Rating/Rating';
import InfoLogement from '@/Components/InfoLogement/InfoLogement';
import Tags from '@/Components/Tags/Tags';
import Collapsible from '@/Components/Collapsible/Collapsible';


const Logement = () => {

    const [logement, setLogement] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getInfo();
    }, [])

    const getInfo = async () => {
        await LogementService.getLogement(id)
            .then((data) => {
                if (data) {
                    setLogement(data);
                    setIsLoading(false);
                } else {
                    navigate("/404");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


if (isLoading) return (<h3>Chargement...</h3>)

let listtags = [];
    for (let i = 0; i<logement.tags.length; i++){
        listtags.push(<li key={logement.tags[i]}>{logement.tags[i]}</li>)
    }

return (
        <section className="logement">
            <Slideshow lien={logement.pictures}/>
            <div className='logementcontentinfo'>
                <div className='logementcontentdescription'>
                    <InfoLogement title={logement.title} location={logement.location}/>
                    <Tags tags={logement.tags} />
                </div>
                <div className='logementcontenthost'>
                    <Profil host={logement.host}/>
                    <div className='logementhoststarrating'>
                        <Rating rating={logement.rating} />
                    </div>
                </div>
            </div>
            
            <ul className='collapslogement'>
                <Collapsible key={logement.id + "about"}  title="description" description={logement.description} view="about"/>
                <Collapsible key={logement.id + "logement"}  title="equipments" description={logement.equipments} view="logement"/>
            </ul>
        </section>
    );
};

export default Logement;