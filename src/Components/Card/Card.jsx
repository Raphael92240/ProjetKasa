import React from 'react';

import { Link } from "react-router-dom";

const Card = ({id, cover, title}) => {
    return (
        <Link to={`/logement/${id}`}>
            <li className="Card" id={id}>
                <img className="Card-image" src={cover} alt="ImagePrincipal de l'apartement " />
                <div className="Card-sombre"></div>
                <h2 className="Card-titre">{title}</h2>
            </li>
        </Link>
    );
};

export default Card;