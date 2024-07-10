import React,{useState,useEffect} from 'react'
import './singleproduct.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Singleproduct() {
   const{product_id}= useParams()
   console.log(product_id)

   const [product,setproduct]=useState([])
    console.log(product)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${product_id}`).then((response) => {
            console.log(response.data);
            setproduct(response.data)
        })
    }, [])


  return (
    <div className='pro2'>
        <div className='pro'> <img src={product.image} alt="" height={350} width={350}/></div>
        <br />
        <div className='pro1'> 
            <h6>{product.category}</h6>
        <br />
       <h3> {product.title}
       </h3>
       <br />
       
       
      <h5>${product.price}</h5> 
________________________________________________
<br />
<h6>{product.description}</h6>
<br />
<br />
      <button className='pro3'>Add to cart</button>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={20}
  fill="currentColor"
  className="bi bi-file-plus-fill"
  viewBox="0 0 16 16"
>
    

  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0" />
</svg>
-
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={20}
  fill="currentColor"
  className="bi bi-file-minus-fill"
  viewBox="0 0 16 16"
>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1" />
</svg>



       </div>
       

    </div>
  )
}
