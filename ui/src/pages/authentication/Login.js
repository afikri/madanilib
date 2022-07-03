import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import palm from '../../images/palm-oil.jpg'
import './Login.css';

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
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          {
            validation.message && (
              <div>
                {validation.message}
              </div>
            )
          }
          <form className="login100-form validate-form" onSubmit={handleLogin}>
            <span className="login100-form-title p-b-43">
              MadaniLib
            </span>

            <div className="wrap-input100 validate-input">
              <input className="input100"
                type="text"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <span className="focus-input100"></span>
              <span className="label-input100">Email</span>
            </div>
            {
              validation.email && (
                <div>
                  {validation.email[0]}
                </div>
              )
            }

            <div className="wrap-input100 validate-input">
              <input className="input100"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
              <span className="focus-input100"></span>
              <span className="label-input100">Password</span>
            </div>
            {
              validation.password && (
                <div>
                  {validation.password[0]}
                </div>
              )
            }

            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div className="contact100-form-checkbox">
                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                {/* <label htmlFor="label-checkbox100" for="ckb3">
                Ingat saya
                </label> */}
              </div>

              <div>
                <Link to="#" className="txt1" style={{ textDecoration: "none" }}>
                  Lupa Password?
                </Link>
              </div>
            </div>


            <div className="container-login100-form-btn">
              <button className="login100-form-btn" >
                Login
              </button>
            </div>

            <div className="text-center p-t-46 p-b-20">
              <span className="txt2">
                atau Sign Up dengan
              </span>
            </div>

            <div className="login100-form-social flex-c-m">
              <Link to="#" className="login100-form-social-item flex-c-m bg3 m-r-5" style={{ textDecoration: "none" }}>
                <i className="fa fa-google" aria-hidden="true"></i>
              </Link>
              <Link to="#" className="login100-form-social-item flex-c-m bg1 m-r-5" style={{ textDecoration: "none" }}>
                <i className="fa fa-facebook-f" aria-hidden="true"></i>
              </Link>

              <Link to="#" className="login100-form-social-item flex-c-m bg2 m-r-5" style={{ textDecoration: "none" }}>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
            </div>
          </form>

          <div className="login100-more"  >
            <img src={palm} width="100%" height="100%" alt="palm-oil" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login