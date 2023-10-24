import React, { useState } from 'react';
import '../index.css';
import Visita from '../images/visitaPerro.png';
import Bao from '../images/Baño.png';
import Aseo from '../images/aseo.png';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    Visita, 
    Bao,
    Aseo
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt='' style={{ width: '100%' }} />
      <button className="prev" onClick={prevSlide}>Anterior</button> 
      <button className="next" onClick={nextSlide}>Siguiente</button>
    </div>
  )
}

export default Carousel;
