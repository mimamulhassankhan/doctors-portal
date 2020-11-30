import { faUserMd, faStethoscope, faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const UserInteraction = () => {

    const history = useHistory();

    const businessInfo = [
        {
            id: '100',
            title: 'Find a Doctor',
            description: 'Choose by name, specialty and more.',
            icon: faUserMd,
            bgColor: '#0bb288'
        },
        {
            id: '200',
            title: 'Send an Inquiry',
            description: 'Ask about our treatments and services.',
            icon: faStethoscope,
            bgColor: '#646569'
        },
        {
            id: '300',
            title: 'Book Appointment',
            description: 'Schedule your visit online.',
            icon: faFileMedicalAlt,
            bgColor: '#af976d'
        },
    ];

    const userInteractionHandler = id => {
        if(id === '100'){
            history.push('/findDoctor');
        }
    }

    return (
        <>
            <Row>
                {
                    businessInfo.map((info, idx) => 
                    <Col onClick={() => userInteractionHandler(info.id)} style={{backgroundColor: `${info.bgColor}`, cursor: 'pointer'}} className={`py-3 text-white text-center d-flex justify-content-center align-items-center`} md={4} key={idx}>
                        <div >
                            <div style={{height: '80px', width: '80px'}} className="overflow-hidden d-flex justify-content-center align-items-center rounded-circle border border-light mx-auto">
                                <FontAwesomeIcon  icon={ info.icon } size="3x"/>
                            </div>
                            <div className="py-3">
                                <h4>{info.title}</h4>
                                <p>{info.description}</p>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </>
    );
};

export default UserInteraction;