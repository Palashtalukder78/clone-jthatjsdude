import React from 'react';
import BodyLeftItems from '../Body-left-items/BodyLeftItems';
import BodyLeftDetails from './BodyLeftDetails';

const BodyLeft = () => {
    return (
        <div className='col-md-8'>
            <BodyLeftDetails></BodyLeftDetails>
            <BodyLeftItems></BodyLeftItems>
        </div>
    );
};

export default BodyLeft;