// Import React and necessary hooks
import React, { useEffect, useState } from 'react'
// Import Swiper modules for creating a slider component
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import product data from a JSON file
import products from "../../productData.json"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import FontAwesomeIcon for displaying icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// Import custom CSS styles for the slider component
import "./Slider.css"

// Define the Slider component
const Slider = () => {
  
 // Define the breakpoints for responsive design
 const breakPoints={
  200:{
    slidesPerView:1 // Show one slide per view for screens smaller than 200px
  },
  400:{
    slidesPerView:2 // Show two slides per view for screens between 200px and 400px
  },
  580:{
    slidesPerView:2 // Show two slides per view for screens between 400px and 580px
  },
  880:{
    slidesPerView:3 // Show three slides per view for screens between 580px and 880px
  },
  1000:{
    slidesPerView:4 // Show four slides per view for screens larger than 1000px
  },
 }

   return (
    // Render the Swiper component with the specified props
    <Swiper className='slider'
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={40} // Set the space between slides to 40px
    breakpoints={breakPoints} // Apply the breakpoints for responsive design
    navigation // Enable navigation buttons
    >
    { products.products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="product-card">
            <img src={product.image} className="product-card-img" alt={product.title} />
            <div className="product-card-body">
              <h5 className="product-card-title">{product.title.slice(0,20)}...</h5>
              <p className="product-card-text">{product.description.slice(0,50)
              }...</p> 
              <p className="product-card-price">${product.price}</p> 
              <div className="check-out-button">
              <button >
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> 
                add To cart
              </button>
                
            </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
  </Swiper>
   )
 }
 
 // Export the Slider component
 export default Slider
