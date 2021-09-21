import React, { useEffect, useState } from 'react';
import BodyLeftItem from './BodyLeftItem';
import tutorialsJson from './tutorials.json';


const BodyLeftItems = () => {
    const [tutorials, setTutorials] = useState([]);
    useEffect(() => {
        setTutorials(tutorialsJson);
    }, [])
    return (
        <div className='row'>

            {
                tutorials.map(tutorial => <BodyLeftItem
                    tutorial={tutorial}
                ></BodyLeftItem>)
            }
        </div>
    );
};

export default BodyLeftItems;