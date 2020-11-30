import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {

    const businessInfo = [
        {
            title: 'Opeing Hours',
            description: 'We are open 7 days',
            icon: faClock,
            bgColor: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, NY 3500, United States',
            icon: faMapMarkerAlt,
            bgColor: 'dark'
        },
        {
            title: 'Contact Us Now',
            description: '+880 1682992668',
            icon: faPhoneAlt,
            bgColor: 'primary'
        },
    ];

    return (
        <section>
            <Row>
                {
                    businessInfo.map((info, idx) => 
                    <Col md={4} key={idx} className="text-white">
                        <div className={`bg-${info.bgColor} rounded text-center p-1 d-flex justify-content-center align-items-center`}>
                            <div>
                                <FontAwesomeIcon  icon={ info.icon } size="3x"/>
                            </div>
                            <div className="ml-3 text-left">
                                <h6>{info.title}</h6>
                                <small>{info.description}</small>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </section>
    );
};

export default BusinessInfo;