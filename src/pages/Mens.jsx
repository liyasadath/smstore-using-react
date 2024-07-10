import React,{useState,useEffect}  from 'react'
import './mens.css'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Mens() {

    const [men,setmen]=useState([])
    console.log(men)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing").then((response) => {
            console.log(response.data);
            setmen(response.data)
        })
    }, []) 

    const navigate=useNavigate()

    const categ=(parameter)=>{
      navigate(`/singleproduct/${parameter}`)
    }



  return (
    <div className='jewel-main'>
        <Navbar/>
        <div className='men-img'>
    <span className='jewel-head'><h1>Men's Clothing</h1></span>
    </div>
    <div className='cont-elect'>
        {
            men.map((value,index)=>(
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
