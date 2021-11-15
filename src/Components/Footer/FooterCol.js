import React from 'react';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FcCallback } from 'react-icons/fc';
// import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FooterColumn } from '../Style/Style';

const FooterCol = (props) => {
    const {menuItem, menuTitle, link} = props;
    return (
        // <Col lg={3} md={3} sm={12} xl={3} xs={6} xxl={3}>
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
                                <details>
                                    <summary>{item.year}</summary>
                                    <div style={{paddingLeft:'30px'}}>
                                        <p> {item.student}</p>

                                        <div style={{display:'flex', alignItems: 'center'}}>
                                           
                                            <FiPhoneCall size={30} style={{paddingRight:'5px', color:'red'}}/>
                                            <p>{item.number}</p>

                                        </div>
                                    </div>
                                </details>
                        }
                        <div style={{display:'flex', alignItems: 'self-start'}}>
                            {
                                item.icon =='map' && <FaMapMarkerAlt className='footerIcon'/>
                                
                            }
                            
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