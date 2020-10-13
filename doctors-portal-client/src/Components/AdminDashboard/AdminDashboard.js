import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import { faCalendar, faPen} from '@fortawesome/free-solid-svg-icons';
import { services } from '../../FakeData/services';

const AdminDashboard = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('https://pure-inlet-43609.herokuapp.com/getPatients')
        .then(res => res.json())
        .then(data => setPatients(data));
    },[])

    const todayAppointments = patients.filter(pt => pt.date === (new Date()).toDateString().toString());
    
    return (
        <>
        <Container>
            <h3>Dashboard</h3>
            <Row>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-info p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                                <h1>09</h1>
                            </Col>
                            <Col md={4}>
                                <p>Appointments <br/> Pending</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-warning p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                                <h1>{todayAppointments.length}</h1>
                            </Col>
                            <Col md={4}>
                                <p>Today's <br/> Apponitments</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-success p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                                <h1>{patients.length}</h1>
                            </Col>
                            <Col md={4}>
                                <p>Total<br/> Apponitments</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-danger p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                                <h1>{patients.length}</h1>
                            </Col>
                            <Col md={4}>
                                <p>Total<br/> Patients</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="rounded mt-3" style={{backgroundColor: 'lightblue'}}>
                <Col className="p-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>Recent Apponitments</h3>
                        <div>
                            <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic"  disabled>
                                <FontAwesomeIcon icon={faCalendar}/> | Week
                            </Dropdown.Toggle>
                            </Dropdown>
                        </div>
                    </div>
                    <Table className="text-center mt-2" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Prescription</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map(pt => 
                            <tr key={pt._id}>
                                <td>1</td>
                                <td>{pt.date}</td>
                                <td>{pt.serviceTime}</td>
                                <td>{pt.patientName}</td>
                                <td>{pt.phone}</td>
                                <td>
                                    <Button variant="success">View</Button>
                                </td>
                                <td >
                                    <Button variant="info">Pending</Button>
                                    <Button className="ml-1" variant="warning"><FontAwesomeIcon icon={faPen} /></Button>
                                </td>
                                
                            </tr>)
                        }
                        
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
            
        </>
    );
};

export default AdminDashboard;