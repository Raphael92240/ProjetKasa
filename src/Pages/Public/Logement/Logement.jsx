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

    return (
        <section className="logement">
            { 
              
              

            }

                
                
            </section>
    );
};

export default Logement;