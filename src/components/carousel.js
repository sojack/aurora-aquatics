/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Slider from "react-slick"
import image01 from "../images/photos/pool-main.jpg"
import image02 from "../images/photos/stock-photo-big-modern-swimming-pool-28504144.jpg"
import image03 from "../images/photos/stock-photo-lanes-of-a-competition-swimming-pool-197410067.jpg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import logo from "../images/logo-auroraAquatics.svg"
import logoalt from "../images/logo-auroraAquatics-alt-shad.svg"

var settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
}

const MyCarousel = () => {
  return (
    <Slider {...settings}>
      <div>
        <div className="slides slide01">
          <img className="bg01" src={image01} alt="image 01" />
          <div className="colorPattern"></div>
          <h1>
            SWIMMING
            <br />
            <span>for</span> EVERYONE
          </h1>
          <img src={logoalt} alt="logo" className="slide01Logo" />
        </div>
      </div>
      {/* <div>
        <div className="slides slide02">
          <img src={image02} alt="image 01" />
          <div>
            <h1>Mission</h1>
            <h2>
              To support the development of a premiere accessible aquatic
              facility that will benefit the recreational, competitive, and
              community users in Aurora and York Region.
            </h2>
          </div>
          <img src={logoalt} alt="logo" className="slide02Logo" />
        </div>
      </div>
      <div>
        <div className="slides slide03">
          <img src={image03} alt="image 01" />
        </div>
      </div> */}
    </Slider>
  )
}

export default MyCarousel
