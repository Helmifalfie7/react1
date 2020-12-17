import React from 'react'
import {Carousel} from 'react-bootstrap'
import './css/CarousStyle.css'


function ControlledCarousel(){
    return(
        <Carousel>
  <Carousel.Item>
    <img
    //   className="d-block w-100"
      src="/Images/1.jpg"
      alt="1"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    //   className="d-block w-100"
      src="/Images/2.jpg"
      alt="2"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    //   className="d-block w-100"
      src="/Images/3.png"
      alt="3"
    />
  </Carousel.Item>
</Carousel>

    )
}

  export default ControlledCarousel