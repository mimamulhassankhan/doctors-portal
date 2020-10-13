import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faChartLine, faCalendarCheck, faProcedures, faFileAlt, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import AdminAppointments from '../AdminAppointments/AdminAppointments';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import { connect } from 'react-redux';
import { handleSignOut } from './signOutManager';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';

const DashboardNav = ({user, addLoggedinUser}) => {
    const signOut = () => {
        handleSignOut()
        .then(res => {
            addLoggedinUser(res);
        })
    }
    return (
        <>
        <Tab.Container  id="left-tabs-example" defaultActiveKey="dashboard">
            <Row className="min-vh-100">
                <Col className="bg-warning" sm={3}>
                    <Nav variant="pills" className="font-weight-bold flex-column text-white">
                        {
                            user.email &&
                            <Nav.Item>
                                Siged in as: <br/> {user.email}
                            </Nav.Item>
                        }
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="dashboard"><FontAwesomeIcon className="mr-2" icon={faChartLine} />Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="appointments"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Appointments</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="patients"><FontAwesomeIcon className="mr-2" icon={faProcedures} />Patients</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="prescriptions"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Prescriptions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="settings" disabled><FontAwesomeIcon className="mr-2" icon={faCog} />Settings</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={signOut} className="text-white" eventKey="signout"><FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="dashboard">
                        <AdminDashboard/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="appointments">
                        <AdminAppointments/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="patients">
                        <h1>This is patients</h1>
                    </Tab.Pane>
                    <Tab.Pane eventKey="prescriptions">
                        <h1>This is prescriptions</h1>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </>
    );
};

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardNav);