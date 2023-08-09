import React from 'react';
import { useParams } from 'react-router-dom';


const Logement = () => {



let {id} = useParams()
console.log(id)

fetch('@/Assets/Api/logement.json')
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));

  
    return (
        <section className="logement">
            


        </section>
    );
};

export default Logement;