import React, { useState } from 'react';
import DoctorContainer from '../DoctorContainer/DoctorContainer';
import DoctorSearch from '../DoctorSearch/DoctorSearch';

const FindDoctorIndex = () => {
    const [selectedDept, setSelectedDept] = useState('');
    return (
        <>
            <DoctorSearch setSelectedDept={setSelectedDept} ></DoctorSearch>
            <DoctorContainer selectedDept={selectedDept}></DoctorContainer>
        </>
    );
};

export default FindDoctorIndex;