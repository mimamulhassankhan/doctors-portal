import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import {faPhone, faComments, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { updateDocId } from '../../../Redux/Actions/PortalActions';
import { connect } from 'react-redux';

const FindDoctorCard = ({selectedDoc, appointmentInfo, updateDocId}) => {

    const history = useHistory();
    const {docId, docPic, name, department, degree} = selectedDoc;

    const handleFindDoctor = (e) => {
        e.preventDefault();
        updateDocId(docId);
        history.push('/appointment');
    }

    return (
        <Card style={{ width: '22rem' }} className="m-1 p-1 text-center" >
            <Image className="mx-auto" width={100} height={100} src={docPic} roundedCircle fluid/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="border-bottom border-danger">Description</Card.Text>
                <Card.Text className="text-left">{department}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Row>
                    <Col md={4} className="border-right text-center">
                        <div style={{width: '30px', height:'30px'}} className="rounded-circle mx-auto bg-dark d-flex justify-content-center align-items-center overflow-hidden">
                            <FontAwesomeIcon className="text-white" icon={faPhone}></FontAwesomeIcon>
                        </div>
                        <small>CALL FOR AN APPOINMENT</small>
                    </Col>
                    <Col md={4} className="border-right text-center">
                        <div style={{width: '30px', height:'30px'}} className="rounded-circle mx-auto bg-dark d-flex justify-content-center align-items-center overflow-hidden">
                            <FontAwesomeIcon className="text-white" icon={faComments}></FontAwesomeIcon>
                        </div>
                        <small>SEND AN INQUIRY</small>
                    </Col>
                    <Col style={{cursor: 'pointer'}} onClick={(e) => handleFindDoctor(e)} md={4} className="text-center">
                        <div style={{width: '30px', height:'30px'}} className="rounded-circle mx-auto bg-dark d-flex justify-content-center align-items-center overflow-hidden">
                            <FontAwesomeIcon className="text-white" icon={faCalendarAlt}></FontAwesomeIcon>
                        </div>
                        <small>MAKE APPOINMENT</small>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};
const mapStateToProps = state => {
    return{
        appointmentInfo: state.appointmentInfo
    }
}

const mapDispatchToProps = {
    updateDocId: updateDocId
}
export default connect(mapStateToProps, mapDispatchToProps)(FindDoctorCard);