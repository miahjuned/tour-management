import React, { useState } from 'react';
import { AboutOverview, AboutSubTitle, AboutSubTitleBottom, MainContainer, TESTIMONIALContainer, TESTIMONIALContent, TESTIMONIALContentArea, TESTIMONIALContentText, TESTIMONIALContentWrap, TESTIMONIALImg, TESTIMONIALImgContainer, TESTIMONIALMain, TESTIMONIALMobileImgContainer, TESTIMONIALWrap, TESTIMONIALWriter, TESTIMONIALWriterTitle, Underline } from '../Style/Style';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import reviewImg from '../../img/quota.png';
import reviewIm from '../../img/ju.jpg';
import { FaQuoteLeft } from 'react-icons/fa';

const TESTIMONIAL = () => {
    const [ stateImage, setStateImage ] =useState(reviewIm);
    // setStateImage(reviewIm)
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
        arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div >
            <MainContainer >
                <div className='testimonials' style={{display: 'flex', justifyContent: 'space-evenly', alignItems:'flex-start'}}>
                    <AboutOverview className='testimonial'>

                        <AboutSubTitle> TESTIMONIAL</AboutSubTitle>
                        <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                        <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                        <Underline style={{marginLeft: "40%"}}/>
                    </AboutOverview>
                    {/* <div>
                        <img width='200px' src={reviewImg} alt='review img'/>
                    </div> */}
                </div>
                <Slider {...settings} className="px-10 w-9/12">
                    <TESTIMONIALMain >
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Juned Ahmed
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                    <TESTIMONIALMain>
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Rahin Ahmed
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                    <TESTIMONIALMain>
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Azharul Islam
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                    <TESTIMONIALMain>
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Tufayel Ahmed
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                    <TESTIMONIALMain>
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Tanveer Ahmed
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                    <TESTIMONIALMain>
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Jafor Ahmed
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                    <TESTIMONIALMain>
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Masrur Ahmed
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                    <TESTIMONIALMain>
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Juned Ahmed
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                    <TESTIMONIALMain>
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Juned Ahmed
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                    <TESTIMONIALMain>
                        <TESTIMONIALContainer>
                            <TESTIMONIALWrap>

                                
                                <TESTIMONIALContent>
                                    <TESTIMONIALContentWrap>
                                        <TESTIMONIALImgContainer>
                                            
                                            <FaQuoteLeft size={30} style={{color:'red',paddingRight:'2px'}}/>
                                            {/* <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`}alt="profile img" /> */}
                                        </TESTIMONIALImgContainer>
                                        <div>
                                            <TESTIMONIALContentText>
                                                This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"
                                            </TESTIMONIALContentText>
                                            <TESTIMONIALContentArea>
                                                <TESTIMONIALMobileImgContainer>
                                                    <TESTIMONIALImg src={`${stateImage ? stateImage : "https://via.placeholder.com/100/eee"}`} alt="profile img"  />
                                                </TESTIMONIALMobileImgContainer>
                                                <div>
                                                    <TESTIMONIALWriter>
                                                        Juned Ahmed
                                                    </TESTIMONIALWriter>
                                                    <TESTIMONIALWriterTitle>
                                                        students 
                                                    </TESTIMONIALWriterTitle>
                                                </div>
                                            </TESTIMONIALContentArea>
                                        </div>
                                    </TESTIMONIALContentWrap>
                                </TESTIMONIALContent>


                            </TESTIMONIALWrap>
                        </TESTIMONIALContainer>
                    </TESTIMONIALMain>
                   
                </Slider>
            </MainContainer>
        </div>
    );
};
 

export default TESTIMONIAL;