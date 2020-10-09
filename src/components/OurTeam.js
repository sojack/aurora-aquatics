import React from "react"
import Styled from "styled-components"

import SO from "../images/logos/logo-so.png"
import SC from "../images/logos/logo-sc.png"
import CAS from "../images/logos/logo-cas.png"
import OAS from "../images/logos/logo-oas.png"
import MD from "../images/logos/logo-md.png"
import DS from "../images/logos/logo-ds.png"
import WP from "../images/logos/logo-wp.png"
import MWP from "../images/logos/logo-mwp.png"
import VAC from "../images/logos/logo-vac.png"
import OWP from "../images/logos/logo-owp.png"

const TeamStyled = Styled.div`
	color:purple;
	display:flex;
	flex-direction: flex-row;
	flex-wrap:wrap;
	justify-content:center;

	.teamLogo{
		width:80px;
	}
	figcaption{
		text-align:center;
		font-size:.8em;
		line-height:1.2em;
		color:gray;
	}
	figure img{
		margin:auto;
		display:block;
	}
`

const OurTeam = () => {
  return (
    <TeamStyled>
      <figure>
        <img className="teamLogo" src={SC} alt="Swim Canada" />
        <figcaption>Swim Canada</figcaption>
      </figure>
      <figure>
        <img className="teamLogo" src={SO} alt="Swim Canada" />
        <figcaption>Swim Ontario</figcaption>
      </figure>
      <figure>
        <img className="teamLogo" src={CAS} alt="Canada Artistic Swimming" />
        <figcaption>
          Canada Artistic
          <br />
          Swimming
        </figcaption>
      </figure>
      <figure>
        <img className="teamLogo" src={OAS} alt="Ontario Artistic Swimming" />
        <figcaption>
          Ontario Artistic
          <br />
          Swimming
        </figcaption>
      </figure>
      <figure>
        <img className="teamLogo" src={MD} alt="Aurora Master Ducks" />
        <figcaption>
          Aurora
          <br />
          Master Ducks
        </figcaption>
      </figure>
      <figure>
        <img className="teamLogo" src={DS} alt="Ducks Swimming" />
        <figcaption>Ducks Swimming</figcaption>
      </figure>
      <figure>
        <img className="teamLogo" src={WP} alt="Water Polo Canada" />
        <figcaption>
          Water Polo
          <br />
          Canada
        </figcaption>
      </figure>
      <figure>
        <img className="teamLogo" src={MWP} alt="Mavericks Water Polo" />
        <figcaption>
          Mavericks
          <br />
          Water Polo
        </figcaption>
      </figure>
      <figure>
        <img className="teamLogo" src={VAC} alt="Vaugh Aquatic Club" />
        <figcaption>
          Vaughan
          <br />
          Aquatic Club
        </figcaption>
      </figure>
      <figure>
        <img className="teamLogo" src={OWP} alt="Ontario Water Polo Ontario" />
        <figcaption>
          Ontario
          <br />
          Water Polo
        </figcaption>
      </figure>
    </TeamStyled>
  )
}

export default OurTeam
