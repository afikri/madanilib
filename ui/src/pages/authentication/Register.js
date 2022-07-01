import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {

  //define state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  //define state validation
  const [validation, setValidation] = useState([]);

  //define navigation
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);

    //send data to server
    await axios.post('http://localhost:8000/api/register', formData)
      .then(() => {
        //redirect to login page
        navigate('/');
      })
      .catch((error) => {
        //assign error to state "validation"
        setValidation(error.response.data);
      })

  }

  return (
    <div><b>Register</b><br />
      <form onSubmit={handleRegistration}>
        <div style={{ marginLeft: "20px" }}>
          <label>NAMA LENGKAP</label>
          <input type="text"
            style={{ marginLeft: "20px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Lengkap" />
          {
            validation.name && (
              <div>
                {validation.name[0]}
              </div>
            )
          }
        </div>

        <div style={{ marginLeft: "20px" }}>
          <label>ALAMAT EMAIL</label>
          <input type="text"
            style={{ marginLeft: "20px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Alamat Email" />
          {
            validation.email && (
              <div>
                {validation.email[0]}
              </div>
            )
          }
        </div>

        <div style={{ marginLeft: "20px" }}>
          <label>PASSWORD</label>
          <input type="password" style={{ marginLeft: "20px" }} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password Anda" />
          {
            validation.password && (
              <div>
                {validation.password[0]}
              </div>
            )
          }
        </div>

        <div style={{ marginLeft: "20px" }}>
          <label>KONFIRMASI PASSWORD</label>
          <input type="password"
            style={{ marginLeft: "20px" }}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Konfirmasi Password" />
          {
            validation.password && (
              <div>
                {validation.password[0]}
              </div>
            )
          }
        </div>
        <button type="submit" >REGISTER</button>
      </form>
      <Link to="/">Back</Link>
    </div>

  )
}

export default Register