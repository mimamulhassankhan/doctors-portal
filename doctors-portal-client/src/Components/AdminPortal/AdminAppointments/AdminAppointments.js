import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';
import Calendar from 'react-calendar';

const AdminAppointments = () => {
    const [patientOnDate, setPatientOnDate] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('https://pure-inlet-43609.herokuapp.com/getPatients')
        .then(res => res.json())
        .then(data => setPatients(data));
    },[])

    const dateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        const matchedPatiens = patients.filter(pt => pt.date === selectedDate.toDateString().toString());
        setPatientOnDate(matchedPatiens);
    }, [selectedDate, patients]);

    console.log(patientOnDate);
    return (
        <>
        <Row className="align-items-start">
            <Col md={4}>
                <Calendar onChange={dateChange} value={selectedDate}/>
            </Col>
            <Col md={8}>
                <div className="d-flex align-items-center justify-content-between">
                    <h3>Appointments</h3>
                    <h5>{selectedDate.toDateString()}</h5>
                </div>
                <Table className="text-center" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Schedule</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patientOnDate && patientOnDate.map(pt => 
                            <tr>
                                <td>1</td>
                                <td>{pt.patientName}</td>
                                <td>{pt.serviceTime}</td>
                                <td>
                                    <Form.Control as="select" defaultValue="Not Visited">
                                        <option>Not Visited</option>
                                        <option active>Visited</option>
                                    </Form.Control>
                                </td>
                            </tr>)
                        }
                    </tbody>
                    </Table>
            </Col>
        </Row>
        </>
    );
};

export default AdminAppointments;