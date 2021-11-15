import React from 'react';
import { Link } from "react-router-dom";
import bannerImg from '../../img/banner-0.png';
import { BannerCol, BannerColImg, BannerColTitle, BannerColTitleHeading,  BannerContainer, BannerImgContainer, BannerRow, BannerSection } from '../Style/Style';

const HomepageBanner = () => {
    return (
        <BannerSection style={{backgroundColor: "#dd2400"}}>
            <BannerContainer>
                <BannerRow>
                    <BannerCol>
                        <BannerColImg>
                            <BannerImgContainer>
                                <img src={bannerImg} alt="Banner Title"/>
                            </BannerImgContainer>
                        </BannerColImg>
                    </BannerCol>
                    <BannerCol>
                        <BannerColTitle>
                            <BannerColTitleHeading>Want to take a picture like this and have fun?</BannerColTitleHeading>
                        </BannerColTitle>
                    </BannerCol>
                    <BannerCol>
                        <BannerColTitle>
                            <Link to="/shop" className="primary_white_BTN">Register now</Link>
                        </BannerColTitle>
                    </BannerCol>
                </BannerRow>
            </BannerContainer>
        </BannerSection>
    );
};

export default HomepageBanner;