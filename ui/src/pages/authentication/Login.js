import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Login.css';
import palm from '../../images/palm-oil.jpg';

const Login = () => {

  //define state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //define state validation
  const [validation, setValidation] = useState([]);

  //define navigation
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('email', email);
    formData.append('password', password);

    //send data to server
    await axios.post('http://localhost:8000/api/login', formData)
      .then((response) => {

        //set token on localStorage
        localStorage.setItem('token', response.data.token);

        //redirect to dashboard
        navigate('/dashboard');
      })
      .catch((error) => {

        //assign error to state "validation"
        setValidation(error.response.data);
      })

  }

  return (
    <div className='grid-container'>
      <div className='grid-item left' style={{ border: "2px solid black" }}><h1>This is left</h1></div>
      <div className='grid-item right' style={{ border: "2px solid black" }}><h1>This is right</h1></div>
    </div>
  )
}

export default Login