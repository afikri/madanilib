import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  //state user
  const [user, setUser] = useState({});

  //define navigation
  const navigate = useNavigate();

  //token
  const token = localStorage.getItem("token");

  //function "fetchData"
  const fetchData = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch user from Rest API
    await axios.get('http://localhost:8000/api/user')
      .then((response) => {
        //set response user to state
        setUser(response.data);
      })
  }

  //hook useEffect
  useEffect(() => {
    //check token empty
    if (!token) {
      //redirect login page
      navigate('/');
    }

    //call function "fetchData"
    fetchData();
  }, []);

  //function logout
  const handleLogout = async () => {

    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch Rest API
    await axios.post('http://localhost:8000/api/logout')
      .then(() => {

        //remove token from localStorage
        localStorage.removeItem("token");

        //redirect halaman login
        navigate('/');
      });
  };

  return (
    <div>
      Dashboard<br />
      <div>
        SELAMAT DATANG <strong>{user.name}</strong>
        <hr />
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  )
}

export default Dashboard