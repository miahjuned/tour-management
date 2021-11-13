import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';
import { HeaderContainer, HeaderLeftContent, HeaderRightContent, HeaderSpan, HeaderTitle, HeaderTitleSpan, Location, LocationContainer } from '../../Style/Style';
import Countdown from './Countdown';

const HeaderSection = () => {
    return (
        <HeaderContainer>
            <article>
                <HeaderLeftContent>
                    <HeaderSpan className=''>TOUR</HeaderSpan>
                    <HeaderTitle>
                        BIGGEST 
                        <HeaderTitleSpan className='headingSpan'>Accounting </HeaderTitleSpan>
                        <HeaderTitleSpan className='headingSpan justify-between'>Department Tour</HeaderTitleSpan>
                        <HeaderTitleSpan >2021</HeaderTitleSpan>
                    </HeaderTitle>
                    <LocationContainer>
                        <Location> 
                            <MdLocationOn size={30} style={{color: '#dd2500bd', paddingRight: '2px'}}/>
                            <p>Bisnakandi, Sylhet</p>
                        </Location>
                        <Location>
                            <FcCalendar size={30} style={{paddingRight: '5px'}}/>
                            <date>27 November 2021</date>
                        </Location>
                    </LocationContainer>
                    <Countdown/>
                    <button className='primary_BTN '>Buy ticket</button>
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