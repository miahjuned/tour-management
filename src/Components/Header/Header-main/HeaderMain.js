import React from 'react';
import Navbar from '../Navbar/Navbar/Navbar';
import BottomBar from '../BottomBar/BottomBar';

const HeaderMain = () => {
    return (
        <header className='header'>
            <section className='header-section'>
                <Navbar/>
                <BottomBar/>
            </section>
        </header>
    );
};

export default HeaderMain;