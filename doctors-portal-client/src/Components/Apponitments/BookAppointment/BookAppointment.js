import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { services } from '../../../FakeData/services';
import { updateAppointmentDate } from '../../../Redux/Actions/PortalActions';
import AppointmentItem from '../AppointmentItem/AppointmentItem';

const BookAppointment = ({date,appointmentInfo, updateAppointmentDate}) => {
    const history = useHistory();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const appointmentService = [...services];
        setAppointments(appointmentService.slice(0,6));
    }, []);

    const handleAppointmentDateChange = (e) => {
        e.preventDefault(date);
        updateAppointmentDate();
        history.push('/superlogin')
    }

    console.log(appointmentInfo)
    return (
        <section style={{height: '700px'}}>
            <Container>
                <h1 className="text-center text-brand mb-5">Selected Date {date}</h1>
                {
                    <Button onClick={(e) => handleAppointmentDateChange(e)} variant="primary">Proceed</Button>
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