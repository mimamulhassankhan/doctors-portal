import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const businessService = [
    {
        name:'Fluoride Treatment',
        image:'/images/fluoride.png',
    },
    {
        name:'Cavity Filling',
        image:'/images/cavity.png',
    },
    {
        name:'Teeth Whitening',
        image:'/images/whitening.png',
    },
]

const Services = () => {
    return (
        <section  className="d-flex align-items-center">
            <Container className="text-center">
                <p style={{ color: '#1CC7C1'}} className="mt-3 mb-3">Our Services</p>
                <h2 className="mt-2 pt-3">Services We Provide</h2> 
                <Row className="mt-5 pt-3">
                    {
                        businessService.map((service, idx )=> 
                            <Col md={4} key={idx}>
                                <div className="p-1">
                                    <Image width={50} src={service.image} alt="im" fluid/>
                                    <h6 className="mt-4">{service.name}</h6>
                                    <p className="mt-2 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quidem.</p>
                                </div>
                            </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;