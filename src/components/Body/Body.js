import React from 'react';
import BodyLeft from '../Body-left/BodyLeft';
import BodyRight from '../Body-right/BodyRight';
import Footer from '../Footer/Footer';

const Body = () => {
    return (
        <div className="container">
            <div className='row mt-4'>
                <BodyLeft></BodyLeft>
                <BodyRight></BodyRight>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Body;