import React from 'react';
import About from '../../Components/About/About';
import Blogs from '../../Components/Blogs/Blogs';
import Footer from '../../Components/Footer/Footer';
import GALLERY from '../../Components/GALLERY/GALLERY';
import HeaderMain from '../../Components/Header/Header-main/HeaderMain';
import HomepageBanner from '../../Components/HomepageBanner/HomepageBanner';
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
            <HomepageBanner/>
            <Footer/>
        </div>
    );
};

export default Home;