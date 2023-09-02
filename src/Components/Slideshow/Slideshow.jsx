import React, { useState } from 'react';
import ArrowLeft from '@/Assets/Images/Components/Gallery/ArrowLeft.png';
import ArrowRight from '@/Assets/Images/Components/Gallery/ArrowRight.png';




const Slideshow = ({lien}) => {

    const [slideIdx, setSlide] = useState(0);

    let lengthslide = lien.length -1;
    const updateIndex = (val) => {
        if (val === -1){
            if (slideIdx === 0){
                setSlide(lien.length -1)
            }else{
                setSlide(slideIdx - 1)
            }
        }
        if (val === 1){
            if (slideIdx === lien.length - 1){
                setSlide(0)
            }else{
                setSlide(slideIdx + 1)
            }
        }
    }
    if (lien.length === 1 ) return (
        <div className='slideshowlogement'>
          <img className='logement-img' src={lien[slideIdx]} alt={slideIdx} />
        </div>
      );
  
    if (lien.length > 1 ) return (
      <div className='slideshowlogement'>
        <img className='logement-img' src={lien[slideIdx]} alt={slideIdx} />
        <div className='navigateslideshowback'>
          <img src={ArrowLeft} onClick={() => updateIndex(-1)} alt="ArrowLeft" ></img>
        </div>
        <div className='navigateslideshownext'>
          <img src={ArrowRight} onClick={() => updateIndex(1)} alt="ArrowRight" ></img>
        </div>
        <div className='indexslideshow'>
          <p>{slideIdx +1 } /{lengthslide +1}</p>
        </div>
      </div>
    );







  }
export default Slideshow;