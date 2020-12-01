import React, { useEffect, useState } from 'react';
import { Container, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { departments } from '../../../FakeData/departments';

const DoctorSearch = ({setSelectedDept, appointmentInfo, mapDispatchToProps}) => {

    const [hospitalDepts, setHospitalDepts] = useState([]);
    useEffect(() => {
        setHospitalDepts([...departments]);
    }, []);

    const handleDepartmentChange = e => {
        setSelectedDept(e);
    }

    return (
        <Container style={{backgroundColor: '#8a8c8c', height: '200px'}} className="d-flex mx-auto p-3 align-items-center">
            <Form.Group>
                <Form.Label>Search by departments</Form.Label>
                <DropdownButton
                    size="lg"
                    title="Select one..."
                    onSelect={handleDepartmentChange}
                    >
                        {
                            hospitalDepts.map(dept => <Dropdown.Item key={dept.id} eventKey={dept.deptName}>{dept.deptName}</Dropdown.Item>)
                        }
                </DropdownButton>
            </Form.Group>
        </Container>
    );
};

export default DoctorSearch;