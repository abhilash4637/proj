import * as types from '../constants';

export const initialState = {
    userType: 'individual',
    formValidation :{
        'SSNInput': {
           valid : false,
            value : '',
            text:'Please enter a valid social security number'
        },
        'LastNameInput': {
            valid : false,
            value : '',
            text:'Please enter your last name'
        },
        'DOBInput': {
            valid : false,
            value : '',
            text:'Please enter a valid birth date'
        }
    }
};

export default (state = initialState, action) => {
    console.log(action,'4::::::::::::::action:::::::::');
    switch (action.type) {
        case types.SWITCH_USER:
            return {
                ...state,
                userType: action.userType
            }
        case types.INPUT_CHANGE:
            return {
                ...state,
                formValidation: action.payload.formValidation,
                userType: 'individual'
            }

        default:
            return state
    }
}