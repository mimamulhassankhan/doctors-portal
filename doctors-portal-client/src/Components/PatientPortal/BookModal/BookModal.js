import React, { useEffect, useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fakeDoctors } from '../../../FakeData/fakeDoctors';

const BookModal = (props) => {
    const onHide = () => {
        props.onHide();
    }
    const {patientName, patientEmail, docId, appointmentDate} = props.appointmentInfo;
    const [patientDetails, setPatientDetails] = useState({
        ...props.appointmentInfo,
        patientPhone: '',
        patientName: props.appointmentInfo.patientName
    });
    const [docDetails, setDocDetails] = useState({});
    useEffect(() => {
        const [selectedDoc] = fakeDoctors.filter(doc => doc.docId === docId);
        setDocDetails(selectedDoc);
    }, [docId]);

    const handleAppointment = (event) => {
        event.preventDefault();
        if(patientDetails.patientName && patientDetails.patientEmail && patientDetails.patientPhone){
            const appointmentInfo = {...patientDetails, bookTime: new Date()};

            fetch('https://shrouded-spire-96660.herokuapp.com/addAppointment', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(appointmentInfo)
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    onHide();
                }
            })
            .catch(err => console.log(err));
        }
    }
    console.log(patientDetails);
    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                <Modal.Title className="text-center">Appointment Form</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleAppointment}>
                <Modal.Body>
                    <>
                        <FormControl name="department" size="md" placeholder="Department" value={docDetails.department} readOnly /> 
                        <br/>
                        <FormControl name="docname" size="md" placeholder="Doctor Name" value={docDetails.name} readOnly /> 
                        <br/>
                        <FormControl name="patientName" onChange={e => { setPatientDetails({...patientDetails, patientName: e.target.value})}} size="md" placeholder="Name" value={patientName} required/> 
                        <br/>
                        <FormControl name="patientPhone" onChange={e => { setPatientDetails({...patientDetails, patientPhone: e.target.value})}} size="md" placeholder="Phone number" required/> 
                        <br/>
                        <FormControl name="patientEmail" size="md" placeholder="Email" value={patientEmail} readOnly/> 
                        <br/>
                        <FormControl name="appointmentDate"  size="md" placeholder="appointmentDate" value={appointmentDate} readOnly/>
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={handleAppointment}>Send</Button>
                </Modal.Footer>
                </form>
                </Modal>
        </>
    );
};

const mapStateToProps = state => {
    return {
        appointmentInfo: state.appointmentInfo
    }
}

export default connect(mapStateToProps)(BookModal);