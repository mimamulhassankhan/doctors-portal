import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Label } from 'reactstrap';
import { addLoggedinUser } from '../../Redux/Actions/PortalActions';
import { defaulftLoggingFramework, signInWithEmailAndPassword } from './LoginManager';

const LoginForm = ({user, addLoggedinUser}) => {
    defaulftLoggingFramework();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = event => {
        let isFormValid = true;
        if(event.target.name === 'email'){
          isFormValid = /\S+\@\S+\.\S+/.test(event.target.value);
        }
        else if(event.target.name === 'password'){
          isFormValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(event.target.value)
        }
        if(isFormValid){
          const newUserInfo = {...userInfo};
          newUserInfo[event.target.name] = event.target.value;
          setUserInfo(newUserInfo);
        }
    }

    const handleSubmit = event =>{
        if(userInfo.email && userInfo.password){
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
            .then(res => {
                setUserInfo(res);
                addLoggedinUser(res);
                history.replace(from);
            })
        }
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="rounded shadow w-25 p-2">
            <h1 className="text-center">Login</h1>
            <TextField name="email" type="email" onBlur={handleBlur} margin="normal" label="Enter email" fullWidth/>
            <TextField name="password" onBlur={handleBlur} label="Enter password" margin="normal" type="Password" fullWidth/>
            <Label className="text-danger">Forget Password?</Label>
            <Button type="submit" className="btn-block mt-5" variant="info">Sign In</Button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);