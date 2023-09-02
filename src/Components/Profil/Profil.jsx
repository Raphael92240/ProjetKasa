import React from 'react';

const Profil = ({ host }) => {
    return (
        <div className="logementhost">
            <p>{host.name}</p>
            <img className='logementhostavatar' src={host.picture} alt="" />
        </div>
    );
};

export default Profil;