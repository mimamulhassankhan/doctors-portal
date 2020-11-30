import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fakeDoctors } from '../../../FakeData/fakeDoctors';
import FindDoctorCard from '../FindDoctorCard/FindDoctorCard';

const DoctorContainer = ({selectedDept}) => {

    const [filterByDeptDoctors, setFilterByDeptDoctors] = useState([]);

    useEffect(() => {
        const filteredDocs = fakeDoctors.filter(doc => doc.department === selectedDept);
        setFilterByDeptDoctors(filteredDocs);
    },[selectedDept])

    return (
        <Container className="d-flex flex-wrap justify-content-between"> 
            {
                filterByDeptDoctors.map(selectedDoc => <FindDoctorCard key={selectedDoc.id} selectedDoc={selectedDoc}></FindDoctorCard>)
            }
        </Container>
    );
};

export default DoctorContainer;