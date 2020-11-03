import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
	overflow:hidden;

	* { box-sizing: border-box; }

	@keyframes ticker {
		0% {
			transform: translate3d(0, 0, 0);
			visibility: visible;
		}

		100% {
			transform: translate3d(-100%, 0, 0);
		}
	}

	.ticker-wrap {
		width: 100vw;
		margin-top: 2em;
		overflow: hidden;
		height: 4rem;
		background-color: var(--purple); 
		padding-left: 100%;
		box-sizing: content-box;

		.ticker {
			display: inline-block;
			height: 4rem;
			line-height: 4rem;  
			white-space: nowrap;
			padding-right: 100%;
			box-sizing: content-box;

			animation-iteration-count: infinite;
			animation-timing-function: linear;
			animation-name: ticker;
			animation-duration: 20s;

			&__item {
				display: inline-block;
				padding: 0 2rem;
				font-size: 2rem;
				color: var(--yellow);
				span::before{
					content:"\u201C";
				}
				i::before{
					content:"\u2013\u2009";
				}
				span::after{
					content:"\u201D";
				}
			}
		}
	}
`

const Ticker = () => (
    <StyledDiv>
		<div className="ticker-wrap">
			<div className="ticker">
				<div className="ticker__item"><span>An enhanced aquatic facility is very much needed in our growing city.</span> <i>JS</i></div>
			</div>
		</div>
    </StyledDiv>
  )


export default Ticker
