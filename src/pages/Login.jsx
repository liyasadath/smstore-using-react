import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [inputchange, setinputchange] = useState({})
  const handleChange = (event) => {
    setinputchange({ ...inputchange, [event.target.name]: event.target.value })
  }
  const navigate = useNavigate()

  console.log(inputchange)
  const handleClick = (event) => {
    event.preventDefault()
    axios.post("https://vadakara-mca-craft-backend.onrender.com/api/login", inputchange).then((response) => {
      console.log(response.data)
      // toast.success(response.data.Message)
      localStorage.setItem("loginId", response.data.loginId)
      navigate('/home')
    }).catch((error) => {
      console.log(error);
      toast.error(error.response.data.Message)
      console.log(error.response.data.Message)

    })
  }

  return (
    <div className='lo1'>
      <div className='lo2'>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
        <form action="">
          <h1>Login</h1>
          <br />
          <br />
          <br />
          <label htmlFor="email" >Email</label>
          <input type="email" placeholder="enter your email" name="email" onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="password" >Password</label>
          <input type="password" name="password" id="" onChange={handleChange} />
          <br />
          <br />
          <button style={{ width: 120 }} onClick={handleClick}>
            {/* <Link className='re6' to={'/home'}> */}
            login now
            {/* </Link> */}</button>
          <h3>Don't have an account?</h3>
          <br />
          <br />
          <button style={{ width: 100 }}>
            {/* <a href="form.html">sign in</a> */}
            <Link className='re5' to={'/registration'}>Sign in</Link>
          </button>
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  )
}
