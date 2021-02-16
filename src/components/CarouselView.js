import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import FirstSlide from '../images/barcodeMobile.jpeg'

const CarouselView = () => {
  return (
    <>
      <Carousel id="carouseArea">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstSlide}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>No need to buy hardware</h3>
            <p>Add products to the inventory system by barcode, image recognition, and OCR with the Mobile Application</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstSlide}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstSlide}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselView;