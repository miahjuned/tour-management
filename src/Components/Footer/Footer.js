import React from 'react';
import FooterCOl from './FooterCol';
// import {Container, Row } from 'react-bootstrap';
import './Footer.css';
import { Copyright, FooterRow, MainContainer } from '../Style/Style';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    const usefulLink = [
        {year:'Masters',student:"Tareq Ahmed", number:'01700000000'},
        {year:'4th Years', student:"Azharul Islam", number:'01700000000'},
        {year:'3rd Years', student:"Tufayel Ahmed",  number:'01700000000'},
        {year:'2nd Years', student:"Tanveer Ahmed",  number:'01700000000'},
        {year:'1st Year', student: "Rahin Ahmed", number:'01700000000'},
    ]
    const ourAddress = [
        {name:"2nd floor Sheikh Hasina building Moulvibazar govt college, court road, Moulvibazar-3200", link: "/google.com", icon: 'map'},
    ]
    const oralHealth = [
        {name:"Emergency Dental Care", link: "/emergency"},
        {name:"Check Up", link:"/checkup"},
        {name:"Treatment of Personal Diseases", link:'/personal-disease'},
        {name:"Tooth Extraction", link: "/tooth-extraction"},
        {name: "Check Up", link: "/checkup"},
    ]
    const info = [
        {name:"Emergency Dental Care", link: "/emergency"},
        {name:"Check Up", link:"/checkup"},
        {name:"Treatment of Personal Diseases", link:'/personal-disease'},
        {name:"Tooth Extraction", link: "/tooth-extraction"},
        {name: "Check Up", link: "/checkup"},
    ]
    return (
        <footer className='footer-area clear-both'>
            <MainContainer className='pt-5'>
                <FooterRow>
                    <FooterCOl key={1} menuTitle={"Contact us"} menuItem={usefulLink}/>
                    <FooterCOl key={2} menuTitle={"Useful Link"} menuItem={oralHealth}/>
                    <FooterCOl key={3} menuTitle={"Info"} menuItem={info}/>
                    <FooterCOl key={4} menuTitle={"Our Address"} menuItem={ourAddress}>
                        <ul className='social-media list-inline'>
                            <li className='list-inline-item'><a href='//facebook.com/zunead1'><FaFacebook className="icon active-icon"/></a></li>
                            <li className='list-inline-item'><a href='//facebook.com/zunead1'><FaTwitterSquare className="icon active-icon"/></a></li>
                            <li className='list-inline-item'><a href='//facebook.com/zunead1' rel="noreferrer" target='_blank'><FaInstagram className="icon active-icon"/></a></li>
                        </ul>
                        <div className='mt-5'>
                            <h6>Website issues Call now</h6>
                            <button className='primary_BTN'>01700000000</button>
                        </div>
                    </FooterCOl>
                </FooterRow>
                <Copyright className="copyright">
                    <p>
                        Let me know if you find any problem- 
                        <a href='//facebook.com/zunead1' rel="noreferrer" target='_blank' className='Contact'>Contact</a>
                        <br/>
                        Copyright @ {(new Date()).getFullYear()} | All Rights Reserved  
                    </p>
                </Copyright>
            </MainContainer>
            
        </footer>
    );
};

export default Footer;