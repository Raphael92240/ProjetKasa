import React from 'react';

const InfoLogement = ({title, location}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{location}</p>
        </div>
    );
};

export default InfoLogement;