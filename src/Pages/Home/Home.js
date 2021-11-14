import React from 'react';
import About from '../../Components/About/About';
import GALLERY from '../../Components/GALLERY/GALLERY';
import HeaderMain from '../../Components/Header/Header-main/HeaderMain';
import Overlay from '../../Components/Overlay/Overlay';

const Home = () => {
    return (
        <div>
            <HeaderMain/>
            <About/>
            <Overlay/>
            <GALLERY/>
        </div>
    );
};

export default Home;