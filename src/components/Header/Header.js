import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand text-secondary" href="/home">That Js Dude</a>
                    <form class="d-flex">
                        <button class="btn bg-info" type="submit">Sign In</button>
                    </form>
                </div>
            </nav >

            {/* Header Section  */}

            <div id='banner-part'>
                <div className='container pt-5 pb-5'>
                    <h1 className='display-3'>Exclusive React Workshop for beginners!</h1>
                    <p>Once in a year opportunity to learn and build your <a href="/react">first React app</a></p>
                    <button className='btn btn-lg text-light'>Learn More </button>
                </div>
            </div>
        </div>
    );
};

export default Header;