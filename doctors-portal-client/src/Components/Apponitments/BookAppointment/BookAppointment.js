import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateAppointmentDate } from '../../../Redux/Actions/PortalActions';

const BookAppointment = ({date,appointmentInfo, updateAppointmentDate}) => {
    const history = useHistory();

    const handleAppointmentDateChange = (e) => {
        e.preventDefault();
        updateAppointmentDate(date);
        history.push('/superlogin')
    }

    console.log(appointmentInfo)
    return (
        <section>
            <Container>
                <h1 className="text-right text-brand mb-5">Selected Date {date}</h1>
                {
                    <Button className="float-right"  onClick={(e) => handleAppointmentDateChange(e)} variant="primary">Proceed</Button>
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

const mapStateToProps = state => {
    return {
        appointmentInfo: state.appointmentInfo
    }
}

const mapDispatchToProps = {
    updateAppointmentDate : updateAppointmentDate
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);