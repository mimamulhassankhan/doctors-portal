import { ADD_USER, UPDATE_APPOINTMENT_DATE, UPDATE_DOC_ID } from "../Actions/PortalActions";

const initialState = {
    user : [],
    appointmentInfo: {
        docId: '',
        appointmentDate: '',
        patientName: '',
        patientEmail: '',
        patientPhone: ''
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
        default:
            return state;
    }
}