import React, { useState } from "react";
import '../css/Carousel.css'
import leftArrow from '../imgs/slider-icons/left-arrow.svg'
import rightArrow from '../imgs/slider-icons/right-arrow.svg'



export default function SliderShow({ direction, moveSlide }) {
 
  return (
    <button onClick={moveSlide}
    className={direction === 'next' ? "btn-slide next": "btn-slide prev"}>

        <img src={direction === 'next' ? rightArrow : leftArrow}/>
    </button>

  );
}
