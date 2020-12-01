import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';
import { handleSignOut } from '../../AdminPortal/DashboardNav/signOutManager';

const Titlebar = ({user, addLoggedinUser}) => {
    const location = useLocation();
    const history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const signOut = () => {
        handleSignOut()
        .then(res => {
            addLoggedinUser(res);
            sessionStorage.removeItem('token');
            history.replace(from);
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <Navbar className="pt-4">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end font-weight-bold">
                        <Nav>
                            <Link className="nav-link mr-5" to="/"> Home </Link>
                            <Nav.Link className="nav-link mr-5">About</Nav.Link>
                            <Nav.Link className="nav-link mr-5">Dental Services</Nav.Link>
                            <Nav.Link className="nav-link mr-5">Reviews</Nav.Link>
                            <Nav.Link className="nav-link mr-5">Blog</Nav.Link>
                            { user.email ? 
                            <Button variant="danger" onClick={signOut} className="nav-link mr-2">Logout ({user.email})</Button>
                            :
                            <Button variant="primary" as={Link} to={'/superlogin'} className="nav-link">Login</Button>} 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Titlebar);