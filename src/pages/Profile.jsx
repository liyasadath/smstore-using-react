import React,{useState,useEffect} from 'react'
import "./profile.css"
import Navbar from '../components/Navbar'
import axios from 'axios'


export default function Profile() {
  const [pro,setpro]=useState({})
  console.log(pro)

  const login=localStorage.getItem('loginId')
console.log(login)
 
 useEffect(() => {
  axios.get(`https://vadakara-mca-craft-backend.onrender.com/api/user/view-profile/${login}`).then((response) => {
      console.log(response.data);
      setpro(response.data.data[0]);
  })
}, [])

    
  return (
    <div>
    <Navbar/>
    <div className='pro2'>
      
        <div className='pro1'>
        <form action="" className="">
  <h1 className="prohe">Profile Details</h1>
  <div className='proli'>
  __________________________________________________________________
  </div>
  <br />
  <br />
  
  <label htmlFor="Full name">Full name</label>
  <input className="pro3" type="text" value={pro?.name} />
  <br />
  {/* <br />
  <label htmlFor="address">Address</label>
  <textarea name="" id="" rows={4} defaultValue={""} />
  <br /> */}
  <br />
  <label htmlFor="mobile number">Mobile Number</label>
  <input className="pro3" type="text" defaultValue=""  value={pro?.mobile} />
  <br />
  <br />
  <label htmlFor="email">Email ID</label>
  <input className='pro3' type="email" name="" id=""  value={pro?.email}/>
  <br />
  <br />
  <label htmlFor="Address">Address </label>
  <textarea className='pro3' type="text" name="" id="" rows={3}  value={pro?.address}/>
  
  <br />
  <br />
  <br />
  
  {/* <label htmlFor="date of birth">Date Of Birth</label>
  <input className='pro3' type="text" name="" id="" />
  <br />
  <br />
  <br /> */}
  <br />
  <button className='probt'>EDIT</button>
  <br />
  <br />
  
  <br />
  <br />
</form>

        </div>
    </div></div>
  )
}
