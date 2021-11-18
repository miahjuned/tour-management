import React from 'react';
import { AboutOverview, AboutSubTitle, AboutSubTitleBottom, div, GALLERYMain, MainContainer, Underline } from '../Style/Style';
import img from '../../img/depImg.jpg'
import imgg from '../../img/semi-opened-laptop-computer-turned-on-on-table-2047905.jpg'
const GALLERY = () => {
    return (
        <div>
            <MainContainer className='star'>
                <AboutOverview>

                    <AboutSubTitle> GALLERY</AboutSubTitle>
                    <AboutSubTitleBottom>PHOTOS OF OUR TOURS</AboutSubTitleBottom>
                    <Underline style={{marginLeft: "40%"}}/>
                </AboutOverview>
                <GALLERYMain>
                        <div className='gallery-img'>
                            <img src={imgg} alt='rightArrow' className='imgs'/>
                        </div>
                        <div className='gallery-img'>
                            <img src="https://images.unsplash.com/photo-1634161911136-dd57cef5cbfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='rightArrow' className='imgs'/>
                        </div>
                        <div className='gallery-img'>
                            <img src={img} alt='rightArrow' className='imgs'/>
                        </div>
                        <div className='gallery-img'>
                            <img src='https://images.unsplash.com/photo-1634161906242-43a1d5beef68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='rightArrow' className='imgs'/>
                        </div>
                        <div className='gallery-img'>
                            <img src='https://images.unsplash.com/photo-1634153508479-0ba621306b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='rightArrow' className='imgs'/>
                        </div>
                        <div className='gallery-img'>
                            <img src='https://images.unsplash.com/photo-1634044026140-c2306756f0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='rightArrow' className='imgs'/>
                        </div>
                        <div className='gallery-img'>
                            <img src='https://images.unsplash.com/photo-1633943929976-65a463f06ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='rightArrow' className='imgs'/>
                        </div>
                        <div className='gallery-img'>
                            <img src='https://images.unsplash.com/photo-1634040843188-5ca36cf26cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='rightArrow' className='imgs'/>
                        </div>
                    </GALLERYMain>
            </MainContainer>
        </div>
    );
};

export default GALLERY;