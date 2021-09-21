import React from 'react';
import './BodyRight.css'

const BodyRight = () => {
    return (
        <div className='col-md-4'>
            <div className='body-right'>
                <div>
                    <h3>Personal Training for $30</h3>
                    <p>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything else, you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a time slot You can Book me</p>
                </div>
                <div>
                    <h3>Recent Videos</h3>
                    <ul>
                        <li>15+ tricks for dev tool</li>
                        <li>Understanding this</li>
                        <li>be expert in JS Array</li>
                        <li>How Browsers works in 4 min</li>
                    </ul>
                    <button className='btn border-secondary'>More on Youtube</button>
                </div>
                <div>
                    <h3>Recent Talks</h3>
                    <ul>
                        <li>Functional Programming: What, Why and How</li>
                        <li>JavaScript Code Quality</li>
                        <li>Angular JS for Absolute Beginners</li>
                        <li>Getting started with React JS</li>
                        <li>High Perf JS</li>
                        <li>Are you sure, you know JavaScripts</li>
                        <li>High Performance JS and CSS</li>
                        <li>What's New in ES6</li>
                        <li>Make Web Faster</li>
                    </ul>
                    <button className='btn border-secondary'>Speaker Details</button>
                </div>
                <div>
                    <h3>Invite to a talk</h3>
                    <p>if you want to invite that js dude in any of your meetup, conference or hangout, send email to <a href="/home
                    ">khan4019@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default BodyRight;