import React from 'react';

import StarsOrange from '@/Assets/Images/Components/Stars/StarsOrange.png';
import Starswhite from '@/Assets/Images/Components/Stars/StarsWhite.png';


const Rating = ({ rating }) => {
    return (
        <div>
            {
                [...Array(5)].map((valeur, index) => {
                    if(index +1 <= rating) {
                        return (
                            <img src={StarsOrange} alt="start orange" key={index} className="star"/>
                        )
                    } else {
                        return (
                            <img src={Starswhite} alt="start grey" key={index} className="star"/>
                        )
                    }
                })
            }
        </div>
    );
};

export default Rating;