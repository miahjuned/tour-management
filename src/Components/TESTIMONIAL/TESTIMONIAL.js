import React from 'react';
import { AboutOverview, AboutSubTitle, AboutSubTitleBottom, MainContainer, Underline } from '../Style/Style';

const TESTIMONIAL = () => {
    return (
        <div>
            <MainContainer>
                <AboutOverview>

                    <AboutSubTitle> TESTIMONIAL</AboutSubTitle>
                    <AboutSubTitleBottom>People shared their feelings </AboutSubTitleBottom>
                    <AboutSubTitleBottom>about how they are enjoying their trip. </AboutSubTitleBottom>
                    <Underline style={{marginLeft: "40%"}}/>
                </AboutOverview>
            </MainContainer>
        </div>
    );
};
 

export default TESTIMONIAL;