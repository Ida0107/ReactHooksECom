import { userTypes } from './user.actions';

export const INITIAL_STATE = {
    profile: {
        name: 'John',
        email: 'john.doe@gmail.com'
    },
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userTypes.SET_USER: {
            const { profile } = action.payload
            return {
                ...state,
                profile 
            }
        }
        default: return state;
    }
}