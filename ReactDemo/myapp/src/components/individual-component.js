import React, { Component } from 'react';

export const Individual = (props) => {
    const { formValidation,onChangeInputType } = props;
    function renderContent(propertyName,index) {
        if(formValidation[propertyName].valid){
            return <label id="ssnInput-error" className="tooltip-text form-error" htmlFor={propertyName}>{formValidation[propertyName].text}</label>
        }
        else{
            return null
        }

    }

    console.log(formValidation,'::::::::::::formValidation::::::::::::::::::::::::::::');
        return (
            <div>
                <div id="forgot-username" className="container">

                    <div className="section form">
                        <form id="forgotUsernameForm" className="validate" method="post" action="/SingleSignOn/Account/ForgotUserName" noValidate="novalidate">
                            <section className="form-section divided-section">
                                <div className="form-errors">
                                    {
                                        Object.keys(formValidation).map((propertyName, index) => {
                                            console.log('::::::::::::::propertyName, index::::::::::',propertyName, index);
                                            return (
                                                <div>{renderContent(propertyName,index)} </div>

                                            )
                                        })
                                    }
                                    {/*<label id="ssnInput-error" className="tooltip-text form-error" htmlFor="ssnInput">Please enter a valid social security number</label>*/}
                                    {/*<label id="lastNameInput-error" class="tooltip-text form-error" htmlFor="lastNameInput">Please enter your last name</label>*/}
                                    {/*<label id="dobInput-error" class="tooltip-text form-error" htmlFor="dobInput">Please enter a valid birth date</label>*/}
                                </div>
                                <div id="individual" className="show">
                                    <div className="form-group ssn-group reveal  has-error has-feedback">
                                        <label className="form-label" htmlFor="ssnInput">SSN</label>
                                        <input className="form-control ssn-control" type="password" id="ssnInput" autoFocus="" name="SSNInput" required="" title="Please enter a valid social security number" autoComplete="off" aria-required="true" aria-invalid="true"
                                               onChange={(e) => onChangeInputType(e)} value={formValidation['SSNInput'].value}/>
                                        <span className="toggle-ssn">
                                           <a className="" href="#" title="Click to reveal your social security number">Show</a>
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="lastNameInput">Last name</label>
                                        <input className="form-control" type="text" id="lastNameInput" name="LastNameInput" value={formValidation['LastNameInput'].value} required="" title="Please enter your last name" aria-required="true"
                                               onChange={(e) => onChangeInputType(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="dobInput">Date of birth</label>
                                        <input className="form-control birth-date-control" type="text" id="dobInput" name="DOBInput"  value={formValidation['DOBInput'].value} required="" title="Please enter a valid birth date" aria-required="true"
                                               onChange={(e) => onChangeInputType(e)}/>
                                    </div>
                                </div>
                                {/*<div id="employer" className="hide">

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="employerEmailInput">Email</label>
                                        <input className="form-control" type="email" id="employerEmailInput" name="EmailInput" value="" required="" title="Please enter a valid email address" aria-required="true" />
                                    </div>
                                </div>*/}

                            </section>
                        </form>
                    </div>
                </div>
            </div>
        );

}
export default Individual;

