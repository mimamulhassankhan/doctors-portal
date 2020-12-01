import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BookAppointment from '../BookAppointment/BookAppointment';

const AppointmentContainer = ({date, handleChangeDate}) => {
    return (
        <>
            <Container>
                <Row style={{height: '400px'}} className="d-flex align-items-center justify-content-between">
                    <Col md={5}>
                        <h1 className="display-5 font-weight-bold">Select Date</h1>
                        <div className="mt-5">
                            <Calendar onChange={handleChangeDate} value={new Date(date)} className="rounded shadow p-3"/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Image src="/images/Mask Group 1.png" fluid/>
                    </Col>
                </Row>
                <BookAppointment date={date}></BookAppointment>
            </Container>
        </>
    );
};

export default AppointmentContainer;