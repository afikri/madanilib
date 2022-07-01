import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
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
    <div>
      {
        validation.message && (
          <div>
            {validation.message}
          </div>
        )
      }

      <form onSubmit={handleLogin} style={{ marginLeft: "20px", marginTop:"30px" }}>
        <div>
          <label>ALAMAT EMAIL</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Alamat Email" />
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
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
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

      {/* <Link to="/dashboard">Login</Link> or <br/> */}
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Login