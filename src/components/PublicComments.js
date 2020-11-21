import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components'

var settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
}

const Comment = styled.div`
margin-top:3em;
.card{
	padding:1em 2em;
	position:relative;
}
.comment{
	font-style:italic;
	margin-bottom: 1em;
	margin-left:1em;
	font-size:1.3em;
	line-height:1.8em;

}
.comment:before{
		content:"\u201C";
		font-size:3em;
		position:absolute;
		color:var(--red);
		top:15px;
		left:5px;
	
}
.name{
	font-style:italic;
	text-align:right;
}
.organization{
	text-align:right;
}
`

const PublicComments = () => {
  return (
	  <Comment>
		<Slider {...settings} >
			<div className='card'>
				<div className="comment">This would be a great boon to the local economy, when we have big meets in 50 metre pools swimmers and their entire families come from all over the province. Many require hotel rooms and tend to dine out for all meals, this helps local economy and businesses in the area</div>
				<div className="name">Stephanie L.</div>
				<div className="organization">Newmarket Stingrays</div>
			</div>
			<div className='card'>
				<div className="comment">Aurora is ideally positioned to capitalize on York Region underserved sports scene.</div>
				<div className="name">Jack S.</div>
				<div className="organization">Aurora Master Ducks</div>
			</div>


		</Slider>

	  </Comment>
  )
}

export default PublicComments
