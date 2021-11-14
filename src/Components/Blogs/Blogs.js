import React from 'react';
import { AboutOverview, AboutSubTitle, AboutSubTitleBottom, MainContainer, Underline } from '../Style/Style';

const Blogs = () => {
    return (
        <div>
            <MainContainer>
                <AboutOverview>
                    <AboutSubTitle> OUR BLOG</AboutSubTitle>
                    <AboutSubTitleBottom>A few words about those who have worked tirelessly</AboutSubTitleBottom>
                    <AboutSubTitleBottom>to make this trip successfully</AboutSubTitleBottom>
                    <Underline style={{marginLeft: "40%"}}/>
                </AboutOverview>
            </MainContainer>
        </div>
    );
};

export default Blogs;

 