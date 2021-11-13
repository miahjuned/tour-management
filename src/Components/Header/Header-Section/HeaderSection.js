import React from 'react';
import { HeaderContainer, HeaderLeftContent, HeaderRightContent } from '../../Style/Style';

const HeaderSection = () => {
    return (
        <HeaderContainer>
            <article>
                <HeaderLeftContent>
                    <span>HURRY UP! DON'T WASTE TIME</span>
                    <h1>
                        BIGGEST
                        <span>Accounting  </span>
                        <span>Department tour </span>
                        2021
                    </h1>
                </HeaderLeftContent>
            </article>
            <article>
                <HeaderRightContent>
                <span>DON'T WASTE TIME</span>
                    <h1>
                        BIGGEST loss
                        <span>Accounting  </span>
                        <span>Department tour </span>
                        2021
                    </h1>
                </HeaderRightContent>
            </article>
        </HeaderContainer>
    );
};

export default HeaderSection;