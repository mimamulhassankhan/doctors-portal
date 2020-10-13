import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentItem from '../AppointmentItem/AppointmentItem';

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showServices, setShowServices] = useState([]);

    useEffect(() => {
        fetch('https://pure-inlet-43609.herokuapp.com/getServices')
        .then(res => res.json())
        .then(data => {
            const weekDay = selectedDate.toString().split(' ')[0];
            const weekDayServices = data.filter(ser => ser && ser.availableOn.filter(day => day === weekDay));
            setShowServices(weekDayServices.slice(0,6));
        })
    }, [selectedDate])

    const dateChange = date => {
        setSelectedDate(date);
    }
    const stringDate = (new Date(selectedDate)).toDateString().toString();

    return (
        <>
            <Container>
                <Calendar onChange={dateChange} value={selectedDate} className="rounded shadow p-3"/>

                <h1 className="text-center mt-3">Available Appointments on {(new Date(selectedDate)).toDateString()}</h1>
                <div className="d-flex mt-3 flex-wrap align-items-center justify-content-around">
                    {
                        showServices.map(ser => <AppointmentItem date={(new Date(stringDate)).toDateString().toString()}  data={ser} key={ser.serviceId}></AppointmentItem>)
                    }
                </div>
            </Container>
        </>
    );
};

export default Appointments;