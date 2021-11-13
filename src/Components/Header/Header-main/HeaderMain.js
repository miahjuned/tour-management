import React from 'react';
import Navbar from '../Navbar/Navbar/Navbar';
import BottomBar from '../BottomBar/BottomBar';
import HeaderSection from '../Header-Section/HeaderSection';

const HeaderMain = () => {
    return (
        <header className='header'>
            <section className='header-section'>
                <Navbar/>
                <BottomBar/>
                <HeaderSection/>
            </section>
        </header>
    );
};

export default HeaderMain;