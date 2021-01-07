import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function About() {
    return (
        <Carousel className="carousel">
        <Carousel.Item interval={5000}>
          <img
            className="first-carousel"
            src="https://www.pennington.com/-/media/images/pennington2-na/us/blog/seed/protect-your-lawn-from-fungal-disease/fungaldisease_header.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
                <h1>Lawn Repair</h1>
                <p>Want grass like this? Listen to our pro tips!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="second-carousel"
            src="https://www.scotts.com/sites/g/files/oydgjc106/files/styles/scotts_marquee_large/public/asset_images/080317_MW_0794-Crop_1.jpg?itok=V460Lsih"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Maintaining Your Lawn</h1>
            <p>Ask us for tips! We have a team of professionals ready to answer any and all questions!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="third-carousel"
            src="https://www.championlawncare.com/wp-content/uploads/2019/07/header-home.jpg"
            alt="Third slide"
          />
          <h1></h1>
          <p></p>
        </Carousel.Item>
      </Carousel>
    )
}
