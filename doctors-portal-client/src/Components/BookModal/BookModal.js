import React, { useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';

const BookModal = (props) => {
    const onHide = () => {
        props.onHide();
    }
    console.log(props);
    const {availableTime} = props.data;

    const [patientDetails, setPatientDetails] = useState({
        serviceName: props.data.serviceName,
        date: '',
        patientName: '',
        email: '',
        phone: '',
        serviceTime: '',
    })

    const handleBlur = event => {
        event.preventDefault();
        const newPatient = {...patientDetails};
        newPatient[event.target.name] = event.target.value;
        setPatientDetails(newPatient);
        
    }
    
    
    const handleAppointment = (event) => {
        event.preventDefault();
        if(patientDetails.serviceName && patientDetails.date && patientDetails.serviceTime){
            const appointmentInfo = {...patientDetails, bookTime: new Date()};

            fetch('https://pure-inlet-43609.herokuapp.com/addAppointment', {
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
                    <Modal.Title id="contained-modal-title-vcenter">
                    Book Appointment
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={handleAppointment}>
                <Modal.Body>
                    <>
                        <FormControl name="serviceTime" onClick={handleBlur} size="md" placeholder="Time" value={availableTime} readOnly /> 
                        <br/>
                        <FormControl name="patientName" onBlur={handleBlur} size="md" placeholder="Name" required/> 
                        <br/>
                        <FormControl name="phone" onBlur={handleBlur} size="md" placeholder="Phone number" required/> 
                        <br/>
                        <FormControl name="email" onBlur={handleBlur} size="md" placeholder="Email" required/> 
                        <br/>
                        <FormControl name="date" onClick={handleBlur} size="md" placeholder="mm-dd-yyyy" value={props.date} readOnly/>
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