import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fakeDoctors } from '../../../FakeData/fakeDoctors';
import FindDoctorCard from '../FindDoctorCard/FindDoctorCard';

const DoctorContainer = ({selectedDept, handlePageState}) => {

    const [filterByDeptDoctors, setFilterByDeptDoctors] = useState([]);

    useEffect(() => {
        const filteredDocs = fakeDoctors.filter(doc => doc.department === selectedDept);
        setFilterByDeptDoctors(filteredDocs);
    },[selectedDept])

    return (
        <Container className="d-flex transition flex-wrap justify-content-between"> 
            {
                filterByDeptDoctors.map(selectedDoc => <FindDoctorCard handlePageState={handlePageState} key={selectedDoc.docId} selectedDoc={selectedDoc}></FindDoctorCard>)
            }
        </Container>
    );
};

export default DoctorContainer;