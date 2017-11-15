import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ForgotUserName from '../components/forgot-username.component';
import { onChangeUserType,onChangeInputType } from '../actions/modalActions'

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       // const { openModal, addTeams } = this.props;
        return (
            <div className="App">
                <ForgotUserName {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('31:::::::::::::::::::::::', state);
    return {
        userType: state.modal.userType,
        formValidation: state.modal.formValidation,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    onChangeUserType: onChangeUserType,
    onChangeInputType : onChangeInputType,
}, dispatch);


export default connect(
    mapStateToProps,mapDispatchToProps
)(AppContainer)




