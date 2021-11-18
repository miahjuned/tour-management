import React from 'react';
import FooterCOl from './FooterCol';
// import {Container, Row } from 'react-bootstrap';
import './Footer.css';
import { Copyright, FooterRow, MainContainer } from '../Style/Style';
import { FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';

const Footer = () => {
    const Contact = [
        {year:'Masters',student:"Tareq Ahmed", number:'01700000000'},
        {year:'4th Years', student:"Azharul Islam", number:'01700000000'},
        {year:'3rd Years', student:"Tufayel Ahmed",  number:'01700000000'},
        {year:'2nd Years', student:"Tanveer Ahmed",  number:'01700000000'},
        {year:'1st Year', student: "Rahin Ahmed", number:'01700000000'},
    ]
    const ourAddress = [
        {name:"2nd floor Sheikh Hasina building Moulvibazar govt college court road Moulvibazar-3200", icon: 'map'},
        // {name:"Moulvibazar govt college,"},
        // {name:"court road, Moulvibazar-3200"}
    ]
    const usefulLink = [
        {name:"About", link: "/about"},
        {name:"Contact", link:"/contact"},
        {name:"Blog", link:'/blog'},
        {name:"Organizer", link: "/organizer"},
    ]
    const info = [
        {name:"Join us", link: "/join-us"},
        {name:"Buy Ticket", link:"/buy-ticket"},
        {name:"Privacy & Policy", link:'/privacy-policy'},
        {name:"Term & Conditions", link: "/term-conditions"},
    ]
    return (
        <footer className='footer-area'>
            <MainContainer className='stars'>
                <FooterRow>
                    <FooterCOl key={1} menuTitle={"CONTACT US"} menuItem={Contact}/>
                    <FooterCOl key={3} menuTitle={"EXPLORE"} menuItem={info}/>
                    <FooterCOl key={2} menuTitle={"USEFUL LINK"} menuItem={usefulLink}/>
                    <FooterCOl key={4} menuTitle={"OUR ADDRESS"} menuItem={ourAddress}>
                        <ul className='social-media list-inline'>
                            <li title='Join Facebook Department group'  className='list-inline-item'>
                                <a href='https://facebook.com/groups/594152293934659'><FaFacebook className="icon active-icon"/></a>
                            </li>
                            <li title='Join Messenger tour group' className='list-inline-item'>
                                <a href='//facebook.com/zunead1'><FaFacebookMessenger className="icon active-icon"/></a>
                            </li>
                            <li title='visit College website' className='list-inline-item'>
                                <a href='https://mbgc.gov.bd' rel="noreferrer" target='_blank'><SiWebflow className="icon active-icon"/></a>
                            </li>
                        </ul>
                        <div className='mt-5'>
                            {/* <h6>Website issues Call now</h6> */}
                            <button title='buy ticket' className='primary_BTN'>Book ticket</button>
                        </div>
                    </FooterCOl>
                </FooterRow>
                <Copyright className="copyright">
                    <p>
                        Let me know if you find any website problems-
                        <a href='//facebook.com/zunead1' rel="noreferrer" target='_blank' className='Contact'>Contact</a>
                        <br/>
                        <hr/>
                        Copyright @ {(new Date()).getFullYear()} | All Rights Reserved  
                    </p>
                </Copyright>
            </MainContainer>
            
        </footer>
    );
};

export default Footer;