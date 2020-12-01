import { ADD_USER, UPDATE_APPOINTMENT_DATE, UPDATE_DOC_ID, UPDATE_PATIENT_INFO } from "../Actions/PortalActions";

const initialState = {
    user : [],
    appointmentInfo: {
        docId: '',
        appointmentDate: '',
        patientName: '',
        patientEmail: ''
    }
}

export const portalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newUser = action.user;
            return {
                ...state,
                user : newUser
            }
        case UPDATE_DOC_ID:
            return {
                ...state,
                appointmentInfo: {
                    ...state.appointmentInfo,
                    docId: action.docId
                }
            }
        case UPDATE_APPOINTMENT_DATE:
            return {
                ...state,
                appointmentInfo: {
                    ...state.appointmentInfo,
                    appointmentDate: action.appointmentDate
                }
            }
        case UPDATE_PATIENT_INFO:
            return {
                ...state,
                appointmentInfo: {
                    ...state.appointmentInfo,
                    patientName: action.patientName,
                    patientEmail: action.patientEmail
                }
            }
        default:
            return state;
    }
}