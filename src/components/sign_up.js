import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { userSignUp }from '../actions'
import input from './input';



class SignUp extends Component {
    handleSignUp = (values) => {
        console.log('sign up', values);
        this.props.signUp(values);
    }
    render(){
        const { handleSubmit, signUpError } = this.props;
    
        return(
           
            <div>
                <h1 className="center">Sign Up</h1>
                <form onSubmit={handleSubmit(this.handleSignUp)}>
                    <div className="row">
                        <Field name="email" label="Email" component={input}/>
                    </div>
                    <div className="row">
                        <Field type="password" size="s6" name="password" label="Password" component={input}/>
                        <Field type="password" size="s6" name="confirmPassword" label="Confirm Password" component={input}/>
                    </div>
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn red darken-2">Sign Up</button>
                            <p className="red-text text-darken-2">{signUpError}</p>
                        </div>
                    </div>
                </form>    
            </div>
        );
    }
   
}

function validate(values){
    const { confirmPassword, email, password } = values;
    const error = {};

    if(!email){
        error.email ='Please enter your email'
    }
    
    if(!password){
        error.password ='Please enter your password'
    }
    if(password !== confirmPassword){
        error.confirmPassword ='Password not match'
    }
    
    return error;
}

 
SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
}) (SignUp);

function mapStateToProps(state){
    return{
        signUpError: state.user.signUpError
    }
}

export default connect(mapStateToProps, {
    signUp: userSignUp
})(SignUp)