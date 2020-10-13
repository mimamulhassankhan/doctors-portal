export const ADD_USER = 'ADD_USER';

export const addLoggedinUser = user => {
    return {type: ADD_USER, user}
}