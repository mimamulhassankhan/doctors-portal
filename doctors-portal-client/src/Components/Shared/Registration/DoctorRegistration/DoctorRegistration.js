import React, { useEffect, useState } from 'react';
import './DoctorRegistration.css';
import firebase from "firebase/app";
import "firebase/auth";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { departments } from '../../../../FakeData/departments';

const DoctorRegistration = () => {

    const [hospitalDepts, setHospitalDepts] = useState([]);

    const [user, setUser] = useState({
        isSignIn : false,
        name : '',
        email : '',
        photo : '',
        dept: '',
        error : '',
        password: '',
        success : false
      })

    const handleBlur = (event) => {
        let isFormValid = true;
    
        if(event.target.name === 'email'){
           const expForEmail = /\S+@\S+\.\S+/;
          isFormValid = expForEmail.test(event.target.value);
        }
    
        if(event.target.name === 'password'){
          // const expForPass = 
           isFormValid = /[a-z]\d|\d[a-z]/.test(event.target.value)  && /[A-Z]/.test(event.target.value) && /[#?!@$%^&*\-_\\\/]/.test(event.target.value) && event.target.value.length>6
        }
    
        if(isFormValid){
          const newUserInfo = {...user};
          newUserInfo[event.target.name] = event.target.value;
          setUser(newUserInfo);
        }
    }

    const handleSubmit = (e)  => {
        e.preventDefault();
        // console.log(newUser && user.name, user.email, user.password);
        if( user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
              console.log(result);
              const newUserInfo = {...user};
              newUserInfo.success = true;
              newUserInfo.error = '';
              setUser(newUserInfo);
              updateUserInfo(user.name);
            })
            .catch((error) => {
                console.log(error);
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                // ..
            });
        }
    }

    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
        displayName: name,       
        }).then(function() {
        console.log('username update successfully')
        }).catch(function(error) {
        console.log(error);
        });
    }

    
    useEffect(() => {
        setHospitalDepts([...departments]);
    }, []);

    const handleDepartmentChange = e => {
        setUser({...user, dept: e});
    }

    console.log(user);

    return (
        <div style={{textAlign: 'center', marginTop : '20px'}}>
     
            <form className="patient-reg" style={{ width: '400px', border: '1px solid black', padding : '10px', margin : '0px auto'}} onSubmit={handleSubmit}>
                <h2>Create a New Account</h2>
                <input type="text" name="name" onBlur={handleBlur} id="" placeholder="Enter Your Name" required/>
                <br/>
                <input type="email" name="email" onBlur={handleBlur} id="" placeholder="Enter Your Email" required/>
                <br/>
                <DropdownButton
                    title="Select one..."
                    onSelect={handleDepartmentChange}
                    >
                        {
                            hospitalDepts.map(dept => <Dropdown.Item key={dept.id} eventKey={dept.deptName}>{dept.deptName}</Dropdown.Item>)
                        }
                </DropdownButton>
                <br/>
                <input type="password" name="password" onBlur={handleBlur} id="" placeholder="Enter Your Password" required/>
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
            
        </div>
    );
};

export default DoctorRegistration;