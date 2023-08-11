import React from 'react';

const Banner = ({image, title}) => {
    return (
            <section className="banner">
                <img className="banner-img" src={image} alt={title} />
                <div className="banner-sombre"></div>
                <h1>{title}</h1>
            </section>
    );
};

export default Banner;