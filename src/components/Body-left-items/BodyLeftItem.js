import React from 'react';
import './BodyLeftItem.css'

const BodyLeftItem = (props) => {
    const { title, desc } = props.tutorial;
    return (
        <div className="col-md-4 item">
            <h3 className='title'>{title}</h3>
            <p>{desc}</p>
            <button className='btn border-secondary item-button'>Read More</button>
        </div>
    );
};

export default BodyLeftItem;