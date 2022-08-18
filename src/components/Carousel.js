import React, { useState } from "react";
import '../css/Carousel.css'
import { carouselImages } from "../data/carouselImgs";
import BtnSlider from './BtnSlider'



export default function SliderShow() {
  const [carouselImgs, setCarouselImgs] = useState(carouselImages)

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () =>{
    if(slideIndex !== carouselImgs.length){
      setSlideIndex(slideIndex + 1)
    }else if(slideIndex === carouselImgs.length){
      setSlideIndex(1)
    }
  }

  const prevSlide = () =>{
    if(slideIndex !== 1){
      setSlideIndex(slideIndex-1)
    }else if(slideIndex === 1){
      setSlideIndex(carouselImgs.length)
    }
  }

  const showImages = carouselImgs.map((obj, i) =>{
   return( <div className={slideIndex === i +1 ? 'slide active-anim' : 'slide'} key={obj.key} >
      <img src={obj.image} alt='artist photos'/>
    </div>
   )
  })

  const moveDot = index => {
    setSlideIndex(index)
  }
  return (
    <div className="container-slider">
      {showImages}
      <BtnSlider moveSlide={nextSlide} direction='next'/>
      <BtnSlider moveSlide={prevSlide} direction='prev'/>

      <div className="container-dots">
        {Array.from({length:4}).map((item, index) =>(
        <div className={slideIndex === index +1 ? 'dot active': 'dot'} onClick={() => moveDot(index +1)}>

        </div>))}
      </div>
    </div>

  );
}


