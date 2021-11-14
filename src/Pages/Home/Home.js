import React from 'react';
import About from '../../Components/About/About';
import Blogs from '../../Components/Blogs/Blogs';
import GALLERY from '../../Components/GALLERY/GALLERY';
import HeaderMain from '../../Components/Header/Header-main/HeaderMain';
import Overlay from '../../Components/Overlay/Overlay';
import TESTIMONIAL from '../../Components/TESTIMONIAL/TESTIMONIAL';

const Home = () => {
    return (
        <div>
            <HeaderMain/>
            <About/>
            <Overlay/>
            <GALLERY/>
            <TESTIMONIAL/>
            <Blogs/>
        </div>
    );
};

export default Home;