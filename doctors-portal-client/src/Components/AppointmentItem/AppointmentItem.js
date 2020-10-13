import React from 'react';
import { Button, Card } from 'react-bootstrap';
import BookModal from '../BookModal/BookModal';

const AppointmentItem = ({date, data}) => {
    console.log(date);
    const {serviceName, seat, availableTime} = data;
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
        <div className="m-2">
        <Card className="shadow text-center" style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title style={{fontSize:'30px', color:'cyan'}}>{serviceName}</Card.Title>
            <Card.Subtitle style={{fontSize:'20px'}}className="mb-2 mt-2">{availableTime}</Card.Subtitle>
            <Card.Text className="text-muted">
            {seat} spaces available
            </Card.Text>
            <Card.Link >
                <Button variant="success" onClick={() => setModalShow(true)}>BOOK APPOINMENT</Button>
            </Card.Link>
            
        </Card.Body>
        </Card>  
        <BookModal
        date={(new Date(date)).toDateString().toString()}
        data={data}
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </div>
        </>
    );
};

export default AppointmentItem;