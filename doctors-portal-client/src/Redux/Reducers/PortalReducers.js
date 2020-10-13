import { ADD_USER } from "../Actions/PortalActions";

const initialState = {
    user : []
}

export const portalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newUser = action.user;
            return {
                ...state,
                user : newUser
            }
        default:
            return state;
    }
}