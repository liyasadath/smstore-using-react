import React from 'react'
import'./slider.css'

export default function Slider() {
  return (
    <div>
        <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="assets\images\n.jpg" className="d-block w-100" alt="..." height={'800'} width={'300'}/>
      <div className='text'><span className='text1'>Men's Collection</span><br />
      <span className='text2'>New Arrivals</span>
      <br /><button type="button" className='btn btn-primary' style={{height:"30px",width:"110px"}}>Shop Now</button></div>
    </div>
    <div className="carousel-item">
      <img src="assets\images\im.jpg" className="d-block w-100" alt="..." height={'800'} width={'300'} />
      <div className='text'><span className='text1'>Women's Collection</span><br />
      <span className='text2'>New Seasons</span>
      <br /><button type="button" className='btn btn-primary' style={{height:"30px",width:"110px"}}>Shop Now</button></div>
    </div>
    </div>
    <div className="carousel-item">
      <img src="assets\images\im5.jpg" className="d-block w-100" alt="..." height={'800'} width={'300'}/>
      <div className='text'><span className='text1'>Accessories</span><br />
      <span className='text2'>Slide Jacket</span>
      <br /><button type="button" className='btn btn-primary' style={{height:"30px",width:"110px"}}>Shop Now</button></div>
    
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
  )
}
