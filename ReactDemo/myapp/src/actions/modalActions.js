import * as types from '../constants';

export const onChangeUserType = (event) => {
   // console.log(types,'4:::::::::::::::::::::::', event);onChangeInputType
    return (dispatch, getState) => {
        dispatch({
            type: types.SWITCH_USER,
            userType: event.target.value
        })
    }
}

export const onChangeInputType = (event) => {
   // console.log(':::::::::::::::::::::',event.target.name);
    return (dispatch, getState) => {
        let formValidation = getState().modal.formValidation;
        console.log(formValidation,':::::::::::::::::::::',event.target.name);
        if (event.target.name === 'SSNInput') {
            if(event.target.value){
                formValidation['SSNInput'].value =  event.target.value;
            }else{
                formValidation['SSNInput'].value =  event.target.value;
                formValidation['SSNInput'].valid =  true;
            }

        } else if (event.target.name === 'LastNameInput') {
            if(event.target.value){
                formValidation['LastNameInput'].value =  event.target.value;
            }else{
                formValidation['LastNameInput'].value =  event.target.value;
                formValidation['LastNameInput'].valid =  true;
            }


        } else if (event.target.name === 'DOBInput') {
            if(event.target.value){
                formValidation['DOBInput'].value =  event.target.value;
            }else{
                formValidation['DOBInput'].value =  event.target.value;
                formValidation['DOBInput'].valid =  true;
            }
        }

        dispatch({
            type: types.INPUT_CHANGE,
            payload: {
                formValidation : formValidation
            }

        })
    }
    /*switch (event.target.name) {
        case 'SSNInput':
            return (dispatch, getState) => {
                const data = getState().modal.editName;
                data.value = event.target.value
                if(event.target.value){
                    dispatch({
                        type: types.PASSWORD,
                        value: event.target.value,
                        valid: false
                    })
                }else{
                    dispatch({
                        type: types.PASSWORD,

                        value: event.target.value,
                        valid: true,
                        text:'Please enter a valid social security number'
                    })
                }

            }
        case 'LastNameInput':
            return (dispatch, getState) => {
                if(event.target.value) {
                    dispatch({
                        type: types.LASTNAME,
                        value: event.target.value,
                        valid: false
                    })
                }
                else{
                    dispatch({
                        type: types.LASTNAME,
                        value: event.target.value,
                        valid: true,
                        text:'Please enter your last name'
                    })
                }
            }
        case 'DOBInput':
            return (dispatch, getState) => {
                if(event.target.value) {
                    dispatch({
                        type: types.DOB,
                        value: event.target.value,
                        valid: false
                    })
                }
                else{
                    dispatch({
                        type: types.DOB,
                        value: event.target.value,
                        valid: true,
                        text:'Please enter a valid birth date'
                    })
                }
            }
        default:
            return null
    }
    // console.log(types,'4:::::::::::::::::::::::', event);onChangeInputType*/

}