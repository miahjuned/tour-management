import React from 'react';
import { FcCalendar} from 'react-icons/fc';
import { BsPeopleFill } from 'react-icons/bs';
import { MainContainer, OverlayContent, OverlayItems, OverlayMain, OverlayStrongContent } from '../Style/Style';
import { AiOutlineUsergroupAdd, AiTwotoneThunderbolt } from 'react-icons/ai';

const Overlay = () => {
    return (
        <section className='Overlay'>
            <div className='Overlay-section'>
                <MainContainer>
                    <OverlayMain>

                        <OverlayContent>
                            <FcCalendar size={30} className='icons'/>
                            <OverlayItems>
                                <OverlayStrongContent>01</OverlayStrongContent>
                                <p>day</p>
                            </OverlayItems>
                        </OverlayContent>

                        <OverlayContent>
                            <AiTwotoneThunderbolt size={30} className='icons'/>
                            <OverlayItems>
                                <OverlayStrongContent>10</OverlayStrongContent>
                                <p>Events</p>
                            </OverlayItems>
                        </OverlayContent>

                        <OverlayContent>
                            <BsPeopleFill size={30} className='icons'/>
                            <OverlayItems>
                                <OverlayStrongContent>96</OverlayStrongContent>
                                <p>Students</p>
                            </OverlayItems>
                        </OverlayContent>

                        <OverlayContent>
                            <AiOutlineUsergroupAdd size={30} className='icons'/>
                            <OverlayItems>
                                <OverlayStrongContent>08</OverlayStrongContent>
                                <p>Teachers</p>
                            </OverlayItems>
                        </OverlayContent>

                    </OverlayMain>
                </MainContainer>
            </div>
        </section>
    );
};

export default Overlay;