import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Titlebar from '../../Shared/Titlebar/Titlebar';
import AppointmentContainer from '../AppointmentContainer/AppointmentContainer'
import BookAppointment from '../BookAppointment/BookAppointment';
import './Appoinments.css';

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChangeDate = (date) =>{
        setSelectedDate(date);
    }

    return (
        <>
            <div className="main-container">
                <AppointmentContainer date={selectedDate.toDateString()} handleChangeDate={handleChangeDate}></AppointmentContainer>
            </div>
            <BookAppointment date={selectedDate.toDateString()}></BookAppointment>
            <Footer></Footer>
        </>
    );
};

export default Appointments;