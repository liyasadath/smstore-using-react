import React,{ useState,useEffect } from 'react'
import './electronics.css'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Electronics() {
    const [elect,setelect]=useState([])
    console.log(elect)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/category/electronics').then((response) => {
            console.log(response.data);
            setelect(response.data)
        })
    }, [])
  
    const navigate=useNavigate()

    const categ=(parameter)=>{
      navigate(`/singleproduct/${parameter}`)
    }


  return (
    <div className='main-elect'>
      <Navbar/>  
      <div className='img-elect'>
        <span className='head-elect'><h1>Electronics</h1></span>
      </div>
      <div className='jewel-cont'>
        {
            elect.map((value,index)=>(
                <div className='elect-api'  onClick={()=>{categ(value.id)}}>
                    <img src={value.image} alt="" height={'250px'} width={'250px'}/>
                    <div className='elect-rate'>{value.rating.rate}</div>
                    <h6 className='elect-cate'>{value.category}</h6>
                    <h5 className='elect-title'>{value.title}</h5>
                    <h6 className='elect-pri'>${value.price}</h6>
                </div>
            ))
        }
      </div>
    </div>
  )
}
