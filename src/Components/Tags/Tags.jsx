import React from 'react';

const Tags = ({tags}) => {

    

    let listtags = [];
    for (let i = 0; i<tags.length; i++){
        listtags.push(<li key={tags[i]}>{tags[i]}</li>)
    }


    return (
        <ul className='listtags'>
            {listtags}
        </ul>
    );
};

export default Tags;