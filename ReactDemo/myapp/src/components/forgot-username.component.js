 import React from 'react';
import Individual from '../components/individual-component';
import Employer from '../components/employer-component';

export const ForgotUserName = (props) => {
    const { userType, onChangeUserType } = props;
    console.log(props,':::::::::::::::::::::::::::::::::::::::::::',userType);

        return (
         <div>
             <div id="forgot-username" className="container">
                 <section className="page-title ">
                     <h1>Retrieve your username</h1>
                 </section>
                 <div className="section form">
                     <form id="forgotUsernameForm" className="validate" method="post" action="/SingleSignOn/Account/ForgotUserName" noValidate="novalidate">
                         <section className="form-section divided-section">
                             <h3 className="form-subtitle col-xs-12">Hey, it happens. Just provide the following information to retrieve your username.</h3>
                             <div id="radio-container">
                                 <div className="form-group radios">
                                     <div className="radio inline">
                                         <input type="radio" name="UserOption" id="individualOption" value="individual"  checked={userType == 'individual'}
                                              onChange={(e) => onChangeUserType(e)}   />
                                             <label className="form-label" htmlFor="individualOption">
                                                 Individual
                                             </label>
                                     </div>
                                     <div className="radio inline">
                                         <input type="radio" name="UserOption" id="employerOption" value="employer" checked={userType == 'employer'}
                                                onChange={(e) => onChangeUserType(e)}
                                                />
                                             <label className="form-label" htmlFor="employerOption">
                                                 Employer
                                             </label>
                                     </div>
                                 </div>
                             </div>
                             {userType === 'individual' ?  <Individual {...props} />: <Employer {...props} />}
                             <div className="captcha-container">
                                 <div className="g-recaptcha form-group" data-sitekey="6LcGfSoUAAAAAMmvZmdDWLoh3hXZ6cxXfvn9SjyX">
                                     <div>
                                         <div>
                                             <iframe src="https://www.google.com/recaptcha/api2/anchor?k=6LcGfSoUAAAAAMmvZmdDWLoh3hXZ6cxXfvn9SjyX&amp;co=aHR0cHM6Ly9sb2dpbi52YWxpYy5jb206NDQz&amp;hl=en&amp;v=r20171109115411&amp;size=normal&amp;cb=hyzytpe4hrck" width="304" height="78" role="presentation" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                                         </div>

                                     </div>
                                 </div>
                             </div>
                             <div id="btn-container" className="btn-container">
                                 <div className="form-group buttons">
                                     <input className="btn grey cancel" type="submit" value="Cancel" name="ActionName"/>
                                     <input className="btn" type="submit" value="Submit" name="ActionName"/>
                                 </div>
                                 <div className="link-container">
                                     <a className="cta" href="https://www.valic.com/security-center" target="_blank" title="Stay Secure">Stay Secure<i className="icon-carrot-right"></i></a>
                                 </div>
                             </div>
                             {/*<Individual />*/}
                             {/*<Employer />*/}
                         </section>
                     </form>
                 </div>
             </div>
         </div>
        );
   // }
}

export default ForgotUserName;
