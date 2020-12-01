export const ADD_USER = 'ADD_USER';
export const UPDATE_DOC_ID = 'UPDATE_DOC_ID';
export const UPDATE_APPOINTMENT_DATE = 'UPDATE_APPOINTMENT_DATE';
export const UPDATE_PATIENT_INFO = 'UPDATE_PATIENT_INFO';


export const addLoggedinUser = user => {
    return {type: ADD_USER, user}
}

export const updateDocId = docId => {
    return {type: UPDATE_DOC_ID, docId}
}

export const updateAppointmentDate = appointmentDate => {
    return{
        type: UPDATE_APPOINTMENT_DATE,
        appointmentDate
    }
}

export const updatePatientInfo = (patientName, patientEmail, patientPhone ) => {
    return{
        type: UPDATE_PATIENT_INFO,
        patientName,
        patientEmail,
        patientPhone
    }    
}