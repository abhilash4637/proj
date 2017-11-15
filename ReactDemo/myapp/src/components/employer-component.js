import React, { Component } from 'react';

class Employer extends Component {
    render() {
        return (
            <div id="employer" className="hide">

                <div className="form-group">
                    <label className="form-label" htmlFor="employerEmailInput">Email</label>
                    <input className="form-control" type="email" id="employerEmailInput" name="EmailInput" value="" required="" title="Please enter a valid email address" aria-required="true" />
                </div>
            </div>

        );
    }
}
export default Employer;