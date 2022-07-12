import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import madani from '../../images/madani.png'

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
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={madani} alt="logo" />
                </div>
                <h4>Silahkan Login untuk Masuk</h4>
                {/* <h6 className="fw-light">Login.</h6> */}
                <form className="pt-3" onSubmit={handleLogin}>
                  <div className="form-group">
                    <input type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                      class="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password" />
                  </div>
                  <div className="mt-3">
                    <button>Sign Up</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        Saya tetap sign in 
                      </label>
                    </div>
                    <a href="#" className="auth-link text-black">Lupa password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="ti-facebook me-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 fw-light">
                    Don't have an account? <a href="register.html" className="text-primary">Create</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login