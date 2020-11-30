import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BookModal from '../BookModal/BookModal';

const PatientPortalIndex = () => {
    const history = useHistory();
    
    const [modalShow, setModalShow] = useState(true);

    return (
        <div>
            <BookModal
                // date={date}
                // data={data}
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                    history.push('/');}} />
        </div>
    );
};

export default PatientPortalIndex;