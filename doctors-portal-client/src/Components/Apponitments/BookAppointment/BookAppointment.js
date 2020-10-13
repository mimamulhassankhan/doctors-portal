import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { services } from '../../../FakeData/services';
import AppointmentItem from '../AppointmentItem/AppointmentItem';

const BookAppointment = ({date}) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const appointmentService = [...services];
        setAppointments(appointmentService.slice(0,6));
    }, [])

    return (
        <section style={{height: '700px'}} className="d-flex align-items-center">
            <Container>
                <h1 className="text-center text-brand mb-5">Available Appointments On {date}</h1>
                <div>
                    <Row>
                        {
                            appointments.map((appointment => <AppointmentItem key={appointment.serviceId} date={date} data={appointment}></AppointmentItem>))
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default BookAppointment;