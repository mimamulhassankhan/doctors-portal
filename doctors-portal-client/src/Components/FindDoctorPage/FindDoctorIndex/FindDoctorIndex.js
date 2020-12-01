import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Appointments from '../../Apponitments/Appointments/Appointments';
import DoctorContainer from '../DoctorContainer/DoctorContainer';
import DoctorSearch from '../DoctorSearch/DoctorSearch';
import './FindDoctorIndex.css';


const FindDoctorIndex = () => {
    const [pageState, setPageState] = useState(true);
    const [selectedDept, setSelectedDept] = useState('');
    return (
        <>
            <div>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={pageState}
                        addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                        }}
                        classNames="fade"
                    >
                        <div>
                            {
                                pageState ?
                                <>
                                    <DoctorSearch setSelectedDept={setSelectedDept} ></DoctorSearch>
                                    <DoctorContainer handlePageState={setPageState} selectedDept={selectedDept}></DoctorContainer>
                                </>
                                :
                                <Appointments></Appointments>
                            }
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </>
    );
};

export default FindDoctorIndex;