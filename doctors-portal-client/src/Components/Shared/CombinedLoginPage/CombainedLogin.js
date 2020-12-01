import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical, faProcedures, faUserCog } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './CombainedLogin.css';
import { connect } from 'react-redux';

const CombainedLogin = ({appointmentInfo}) => {
    const history = useHistory();

    const loginUserType = [
        {
            id: 'userType-doc',
            job: 'doctor',
            title: 'Login As a Doctor',
            description: 'Not on this portal',
            icon: faBriefcaseMedical,
            bgColor: '#0bb288'
        },
        {
            id: 'userType-pat',
            job: 'patient',
            title: 'Login As a Patient',
            description: 'No Account??',
            icon: faProcedures,
            bgColor: '#006600'
        },
        {
            id: 'userType-adm',
            title: 'Login As a Admin',
            description: 'Entry Restricted!!',
            icon: faUserCog,
            bgColor: '#b30000'
        }
    ];

    const handleLogingOptions = userType => {
        if(userType === 'userType-doc'){
            history.push('/doctorportal');
        }
        else if(userType === 'userType-adm'){
            history.push('/adminportal');
        }
        else if(userType === 'userType-pat'){
            history.push('/patientportal');
        }
    }

    console.log(appointmentInfo);
    return (
        <section className="combained-login-main d-flex justify-content-center align-items-center">
            <Row>
                {
                    loginUserType.map((info) => 
                    <Col onClick={() => handleLogingOptions(info.id)} style={{backgroundColor: `${info.bgColor}`, cursor: 'pointer'}} className={`py-3 text-white text-center d-flex justify-content-center align-items-center`} md={4} key={info.id}>
                        <div >
                            <div style={{height: '80px', width: '80px'}} className="overflow-hidden d-flex justify-content-center align-items-center rounded-circle border border-light mx-auto">
                                <FontAwesomeIcon  icon={ info.icon } size="2x"/>
                            </div>
                            <div className="py-3">
                                <h4>{info.title}</h4>
                                <p>{info.description}{info.id !== 'userType-adm' ? <Link to={`/registration/${info.job}`} >Create One Now!!</Link> : ' '}</p>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        appointmentInfo : state.appointmentInfo
    }
}

export default connect(mapStateToProps)(CombainedLogin);