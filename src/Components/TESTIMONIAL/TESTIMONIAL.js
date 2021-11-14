import React from 'react';
import { AboutOverview, AboutSubTitle, AboutSubTitleBottom, MainContainer, Underline } from '../Style/Style';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const TESTIMONIAL = () => {
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 5000,
        rows: 1,
        slidesPerRow: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        pauseOnHover: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 0.5,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 0.5,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <MainContainer>
                <AboutOverview>

                    <AboutSubTitle> TESTIMONIAL</AboutSubTitle>
                    <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                    <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                    <Underline style={{marginLeft: "40%"}}/>
                </AboutOverview>
                <Slider {...settings} className="px-10 w-9/12">
                    <AboutOverview>

                        <AboutSubTitle> TESTIMONIAL</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                    <AboutOverview>

                        <AboutSubTitle> TESTIMONIAL 2</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                    <AboutOverview>

                        <AboutSubTitle> TESTIMONIAL 3</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                    <AboutOverview>

                        <AboutSubTitle> TESTIMONIAL 4</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                    <AboutOverview>

                        <AboutSubTitle> TESTIMONIAL 5</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                    <AboutOverview>

                        <AboutSubTitle> TESTIMONIAL 6</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                    <AboutOverview>

                        <AboutSubTitle> TESTIMONIAL 7</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                    <AboutOverview>

                        <AboutSubTitle> TESTIMONIAL 8</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                    <AboutOverview>

                        <AboutSubTitle> TESTIMONIAL 9</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                </Slider>
            </MainContainer>
        </div>
    );
};
 

export default TESTIMONIAL;