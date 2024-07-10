import React, { useState } from 'react'
import './registration.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


export default function Registration() {

  const [inputchange, setinputchange] = useState({})
  const handleChange = (event) => {
    setinputchange({ ...inputchange, [event.target.name]: event.target.value })
  }

  console.log(inputchange)
  const handleClick = (event) => {
    event.preventDefault()
    axios.post("https://vadakara-mca-craft-backend.onrender.com/api/register/user", inputchange).then((response) => {
      toast.success(response.data.Message)
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
      toast.error(error.response.data.Message)
      console.log(error.response.data.Message)
    })

  }

  return (
    <div className='re1'>
      <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      <form action="" className="registration">

        <h1 className="heading">SMSTORE</h1>
        <br />
        <h2 className="heading">Registration form</h2>
        <br />
        <br />
        <div className='re11'>
        <label htmlFor="name">Full name</label>
        <input type="text" placeholder="your name" name='name' onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="address">Address</label>
        <textarea name="address" id="" rows={8} defaultValue={""} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="mobile">Mobile no.</label>
        <input type="text" placeholder="" name='mobile' onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" onChange={handleChange} />
        <br />
        <br />


        <br />
        <label htmlFor="Email">Email</label>
        <input type="email" name="email" id="" onChange={handleChange} />
        <br />
        <br />
        <button className='re10' onClick={handleClick}>Register Now</button>
        <br />
        <br />
        </div>
        <br />
        <br />
        <a href="https://www.maitexa.com">for further information </a>
        <br />
        <br />
        <br />
        <h3>already have an account?</h3>
        <button className='re9'>
          {/* <a href="login.html">login</a> */}
          <Link className='lo2' to={'/'}>Login</Link>
        </button>
        <br />
        <br />
      </form>

    </div>
  )
}
