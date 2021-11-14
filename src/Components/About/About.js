import React from 'react';
import { AboutBlockQuote, AboutContainer, AboutLeftContent, AboutMain, AboutRightContent, AboutSubTitle, AboutSubTitleHeading, AboutTitle, HeaderContainer, HeaderRightVideo } from '../Style/Style';
import videos from '../../img/video.mp4';

const About = () => {
    return (
        <AboutMain>
            <AboutSubTitle>Overview of the Study Tours program</AboutSubTitle>
            <AboutContainer>

                <AboutLeftContent>
                        <HeaderRightVideo controls >
                            <source src={videos} type="video/mp4"/>
                            <source src="movie.ogg" type="video/ogg"/>
                            Your browser does not support the video tag.
                        </HeaderRightVideo>
                </AboutLeftContent>

                <AboutRightContent>
                    <AboutTitle>Never Stop To 
                        <AboutSubTitleHeading>Exploring The Bisnakandi</AboutSubTitleHeading>
                    </AboutTitle>
                    <AboutBlockQuote>
                        <p style={{paddingTop: "10px"}}>
                            Every year an education tour is organized by our department but could not be organized last year due to virus.
                            The tour is being organized again as before as the virus has stopped a bit.
                        </p>
                        <p style={{paddingTop: "10px"}}>
                            You will be glad to know that we are going to have a tour on the coming 28th November 2021. We have decided to go to Bisnakandi. It is a place of great historical interest and it's  also quite near to Sylhet. 
                        </p>
                         
                         <p style={{paddingTop: "10px"}}>
                            We expect to have a very pleasant time. We hope that you will join us and increase our pleasure.
                         </p>
                    </AboutBlockQuote>
                </AboutRightContent>

            </AboutContainer>
        </AboutMain>
    );
};

export default About;