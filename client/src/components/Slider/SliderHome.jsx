import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slid1 from './Slide1.png';
import Slid2 from './Slide2.png';
import Slid3 from './Slide3.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SliderHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Slid1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='SlideCaption'>Winter Garments</h3>
          <p className='SlideCaption'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img
          className="d-block w-100"
          src={Slid2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='SlideCaption'>Laptops and Accesories</h3>
          <p className='SlideCaption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img
          className="d-block w-100"
          src={Slid3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='SlideCaption'>Home Appliances Mega Sale</h3>
          <p className='SlideCaption'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
