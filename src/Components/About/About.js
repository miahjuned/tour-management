import React from 'react';
import { AboutArrow, AboutArrowImg, AboutBlockQuote, AboutContainer, AboutLeftContent, AboutMain, AboutRightContent, AboutSubTitle, AboutSubTitleHeading, AboutSubTitleRight, AboutTitle, HeaderContainer, HeaderRightVideo, AboutSubTitleBottom, AboutOverview, AboutSubTitleUnderline, Underline, MainContainer } from '../Style/Style';
import videos from '../../img/video.mp4';
import leftArrow from '../../img/arrows_main-1.png';
import rightArrow from '../../img/arrows_main-3.1 (1).png';

const About = () => {
    return (
        <MainContainer className='star'>
            <AboutOverview>

                <AboutSubTitle>
                    Overview 
                </AboutSubTitle>
                <AboutSubTitleBottom>
                    of the Study Tours program
                </AboutSubTitleBottom>
                <Underline style={{marginLeft: "40%"}}/>
            
            </AboutOverview>
            {/* <AboutArrow>
                <AboutArrowImg src={rightArrow} alt='rightArrow'/>
            </AboutArrow> */}
            <AboutContainer className='stars'>

                <AboutLeftContent>
                        <HeaderRightVideo controls >
                            <source src={videos} type="video/mp4"/>
                            <source src="movie.ogg" type="video/ogg"/>
                            Your browser does not support the video tag.
                        </HeaderRightVideo>
                </AboutLeftContent>

                <AboutRightContent>
                     <AboutSubTitleRight>About the tour</AboutSubTitleRight>

                    <AboutTitle >Never Stop To 
                        <wbr/>
                        <AboutSubTitleHeading>Exploring The World</AboutSubTitleHeading>
                    </AboutTitle>
                    <AboutBlockQuote>
                        <p style={{paddingTop: "10px"}}>
                            Every year an education tour is organized by our department but could not be organized last year due to Corona Virus.
                            The tour is being organized again as before as the virus has stopped a bit.
                        </p>
                        <p style={{paddingTop: "10px"}}>
                            You will be glad to know that we are going to have a tour on the coming 28th November 2021. We have decided to go to Bisnakandi. It is a place of great historical interest and it's  also quite near to Sylhet. 
                        </p>
                         
                         <p style={{paddingTop: "10px",}}>
                            We expect to have a very pleasant time. We hope that you will join us and increase our pleasure.
                         </p>
                         <p style={{paddingTop: "10px", fontFamily: "Petemoss", fontSize:'50px'}}>
                            Thank you!
                         </p>
                    </AboutBlockQuote>
                </AboutRightContent>

            </AboutContainer>
        </MainContainer>
    );
};

export default About;