import React, { useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';

const BookModal = (props) => {
    const onHide = () => {
        props.onHide();
    }

    const [patientDetails, setPatientDetails] = useState({
        patientName: '',
        email: '',
        phone: '',
    })    
    
    const handleAppointment = (event) => {
        event.preventDefault();
        if(patientDetails.patientName && patientDetails.email && patientDetails.phone){
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
                        {/* <FormControl name="time" size="md" placeholder="Time" value={availableTime} readOnly />  */}
                        <br/>
                        <FormControl name="patientName" onChange={e => { setPatientDetails({...patientDetails, patientName: e.target.value})}} size="md" placeholder="Name" required/> 
                        <br/>
                        <FormControl name="phone" onChange={e => { setPatientDetails({...patientDetails, phone: e.target.value})}} size="md" placeholder="Phone number" required/> 
                        <br/>
                        <FormControl name="email" onChange={e => { setPatientDetails({...patientDetails, email: e.target.value})}} size="md" placeholder="Email" required/> 
                        <br/>
                        {/* <FormControl name="date"  size="md" placeholder="mm-dd-yyyy" value={props.date} readOnly/> */}
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

export default BookModal;