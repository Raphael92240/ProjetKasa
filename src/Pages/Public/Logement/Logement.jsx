import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Collapsible from '@/Components/Collapsible/Collapsible';
import { LogementService } from '@/_Services/Logements.service';



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


//<img src={logement.cover} alt="" />

if (isLoading) return (<h3>Chargement...</h3>)
return (
        <section className="logement">
            <img className='logement-img' src={logement.pictures[0]} alt="" />
            <div className='logementcontentinfo'>
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
                <ul>
                    <li>{logement.tags}</li>
                </ul>
                <ul>
                    <li>{logement.host.name}</li>
                    <li><img src={logement.host.picture} alt="" /></li>
                </ul>
            </div>
            





        {             
            <ul className='collapslogement'>
            <Collapsible key={logement.id + "about"}  title="description" description={logement.description} view="about"/>
            <Collapsible key={logement.id + "logement"}  title="equipments" description={logement.equipments} view="logement"/>
            </ul>
        }

  
            </section>
    );
};

export default Logement;