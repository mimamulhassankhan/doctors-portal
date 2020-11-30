import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { services } from '../../../FakeData/services';
import AppointmentItem from '../AppointmentItem/AppointmentItem';

const BookAppointment = ({date}) => {
    const history = useHistory();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const appointmentService = [...services];
        setAppointments(appointmentService.slice(0,6));
    }, [])

    return (
        <section style={{height: '700px'}}>
            <Container>
                <h1 className="text-center text-brand mb-5">Selected Date {date}</h1>
                {
                    <Button onClick={() => history.push('/superlogin')} variant="primary">Proceed</Button>
                }
                {/* <div>
                    <Row>
                        {
                            appointments.map((appointment => <AppointmentItem key={appointment.serviceId} date={date} data={appointment}></AppointmentItem>))
                        }
                    </Row>
                </div> */}
            </Container>
        </section>
    );
};

export default BookAppointment;