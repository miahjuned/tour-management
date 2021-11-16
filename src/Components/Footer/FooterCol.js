import React from 'react';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FcCallback } from 'react-icons/fc';
// import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FooterColumn, FooterSummary, FooterSummaryStudentName } from '../Style/Style';

const FooterCol = (props) => {
    const {menuItem, menuTitle, link} = props;
    return (
        <FooterColumn>
            <h6 className="textPrimary menu-title">
                {menuTitle ? menuTitle : " "}
                <div className='underline'/>
            </h6>
            <ul>
                {
                    menuItem.map((item, idx) =>
                     <li key={idx}>
                        {
                            item.year  && 
                                <details style={{paddingRight:'5px'}}>
                                    <summary>{item.year}</summary>
                                    <FooterSummary>
                                        <FooterSummaryStudentName> {item.student}</FooterSummaryStudentName>

                                        <div style={{display:'flex', alignItems: 'center'}}>
                                           
                                            <FiPhoneCall size={20} style={{paddingRight:'2px', color:'red'}}/>
                                            <p>{item.number}</p>

                                        </div>
                                    </FooterSummary>
                                </details>
                        }
                        <div >
                            {/* {
                                item.icon =='map' && <FaMapMarkedAlt className='footerIcon'/>
                                
                            } */}
                            
                            <Link to={item.link} className="text-secondary menu-item">{item.name}</Link>
                        </div>
                    </li>)
                }
                {
                    props.children && props.children
                }
            </ul>
            
        </FooterColumn>
    );
};

export default FooterCol;