import React from 'react';
import { Link } from "react-router-dom";


const Not404 = () => {
    return (
        <section className="error404">
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/home" className="link" >Retourner sur la page d’accueil</Link>
        </section>
    );
};

export default Not404;