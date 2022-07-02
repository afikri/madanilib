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

      <div className="left">
        <img src={palm} width="100%" height="100%" alt="palm-oil" />
      </div>
      <div className="right">

        {
          validation.message && (
            <div>
              {validation.message}
            </div>
          )
        }

        <form onSubmit={handleLogin}>
          <div>
            <label>ALAMAT EMAIL</label>
            <input
              className="input-box"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Alamat Email" />
          </div>
          {
            validation.email && (
              <div>
                {validation.email[0]}
              </div>
            )
          }
          <div>
            <label>PASSWORD</label>
            <input
              className="input-box"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" />
          </div>
          {
            validation.password && (
              <div>
                {validation.password[0]}
              </div>
            )
          }
          <div>
            <button type="submit">LOGIN</button>
          </div>

        </form>

        <Link to="/register">Register</Link>

      </div>
    </div>
  )
}

export default Login