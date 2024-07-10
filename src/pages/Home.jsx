import React, { useEffect, useState } from 'react'
import './home.css'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Slider from '../components/Slider'


export default function Home() {

    const navigate=useNavigate()

    const category=(parameter)=>{
        if (parameter=='electronics') {
            navigate('/electronics')
        }
        if (parameter=='jewelery') {
            navigate('/jewelery')
        }
        if(parameter=="men's clothing"){
            navigate('/mens')
        }
        if(parameter=="women's clothing"){
            navigate('/womens')
        }
    }

    const [details, setdetails] = useState([])
    console.log(details);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories').then((response) => {
            console.log(response.data);
            setdetails(response.data)
        })
    }, [])

    const categ=(parameter)=>{
        navigate(`/singleproduct/${parameter}`)
      }
  

    const [state, setstate] = useState([])
    console.log(state);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            console.log(response.data);
            setstate(response.data)
        })
    }, [])

    


    return (
        <div className='main3'>
            <Navbar />
            <div className='one'>
                <Slider/>
                {/* <div className='text'>
                    <span className='text1'>Men's Collection</span><br />
                    <span className='text2'>New Arrivals</span><br />
                    <button type="button" class="btn btn-primary">Shop now</button>

                </div> */}</div>
            <div className='container text-center '>
                <div className='row'>
                    {
                        details.map((value, index) => (
                            <div className='col-lg-2' onClick={()=>{category(value)}}>{value}
                             
                                <div className='coltext'></div>
                            </div>
                        ))
                    }




                </div>
            </div>
            <div className='exp' style={{ textAlign: 'center' }}><h3>Explore Products</h3>
                <div className='container2 text-center'>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-6'>
                        <div className='col1'><a href="">All</a></div>
                        <div className='col1'><a href="">Women's Clothing</a></div>
                        <div className='col1'><a href="">Men's Clothing</a></div>
                        <div className='col1'><a href="">Electronics</a></div>
                        <div className='col1'><a href="">Jewellery</a> </div>
                    </div></div>

                <div className='container4'>
                    {

                        state.map((value, index) => (
                            <>

                                <div className='card'  onClick={()=>{categ(value.id)}}>
                                    
                                <img src={value.image} alt="" height={"250px"} width={"250px"} />
                                <span className='rat'>{value.rating.rate}</span>
                                <h6 className='h6'>{value.category}</h6>
                                <h5 className='h5t'>{value.title}</h5>
                                <h6 className='pri'>${value.price}</h6>
                                </div>


                            </>
                        ))

                    }
                </div>
            </div>




        </div>



    )
}
