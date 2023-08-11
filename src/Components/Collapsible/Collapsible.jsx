import React, { useState } from 'react';

import ArrowDown from '@/Assets/Images/Components/Dropdown/ArrowDown.png';
import ArrowUp from '@/Assets/Images/Components/Dropdown/ArrowUp.png';

const Collapsible = ({id,title,description,view}) => {

    const [open, setOPen] = useState(false);

    const handleDropdown = () => {
        setOPen(!open);
    };

    //SI view = ABOUT on fait un ce return sinon si view = logement on fait un autre affichage
    return (
        <li className="Dropdown" id={id}>
            <div className="Dropdown_header" onClick={handleDropdown} >
                <h3 className="Dropdown_title">{title}</h3>
                <span >
                    <img src={open ? ArrowUp : ArrowDown} alt="flèche" className="Dropdown_ArrowImg" />
                </span>
            </div>
            {
                open && (
                    <div className="Dropdown_content">
                        {description}
                    </div>
                )
            }
        </li>
    );
};

export default Collapsible;