import React from 'react';
import { Button, Col, Image, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    return (
        <>
            <Jumbotron className="bg-transparent" style={{ padding: '0px'}}>
                    <Row className="d-flex align-items-center justify-content-between">
                        <Col md={5}>
                            <h1 className="display-5 font-weight-bold">Your New Smile <br/>Starts Here</h1>
                            <p className="text-secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium aliquam doloremque, consequuntur vel provident minima magnam nam dignissimos at hic placeat! Aut illo suscipit labore quos praesentium dolorem nisi!
                            </p>
                            <Link to="/apponitments">
                                <Button variant="primary">Get Appointment</Button>
                            </Link>
                        </Col>
                        <Col md={6}>
                            <Image src="/images/Mask Group 1.png" fluid/>
                        </Col>
                    </Row>
            </Jumbotron>  
        </>
    );
};

export default TopBanner;