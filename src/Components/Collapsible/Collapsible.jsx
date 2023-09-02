import React, { useState } from 'react';

import ArrowDown from '@/Assets/Images/Components/Dropdown/ArrowDown.png';
import ArrowUp from '@/Assets/Images/Components/Dropdown/ArrowUp.png';

const Collapsible = ({id,title,description,view}) => {

    const [open, setOPen] = useState(false);

    const handleDropdown = () => {
        setOPen(!open);
    };
    

    if (view === "about" ) return (
        <li className="Dropdown" id={id}>
            <div className="Dropdown_header" onClick={handleDropdown} >
                <h3 className="Dropdown_title">{title}</h3>
                <span >
                    <img src={open ? ArrowUp : ArrowDown} alt="flèche" className="Dropdown_ArrowImg" />
                </span>
            </div>
            {
                open && 
                    (
                    <div className="Dropdown_content">
                        <p>
                        {description}
                        </p>
                    </div>
                    )
            }
        </li>
        )

    let listequipments = [];
    for (let i = 0; i<description.length; i++){
        listequipments.push(<li key={description[i]}>{description[i]}</li>)
    }

    if (view === "logement" ) return (
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
                        <ul className='listequipments'>
                        {listequipments}
                        </ul>
                        
                    </div>
                )
            }
        </li>
            )
};

export default Collapsible;