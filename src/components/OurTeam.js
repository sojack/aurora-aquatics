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
import ASD from "../images/logos/logo-asd.png"
import STN from "../images/logos/logo-sting.png"
import NN from "../images/logos/logo-nn.png"
import SS from "../images/logos/logo-ss.png"
import LS from "../images/logos/logo-ls.png"
import HO from "../images/logos/logo-hon.png"
import YR from "../images/logos/logo-yra.png"

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
    margin-top:10px;
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
        <a href="https://www.swimming.ca/">
          <img className="teamLogo" src={SC} alt="Swim Canada" />
        </a>
        <figcaption>Swim Canada</figcaption>
      </figure>
      <figure>
        <a href="https://www.swimontario.com/">
          <img className="teamLogo" src={SO} alt="Swim Canada" />
        </a>

        <figcaption>Swim Ontario</figcaption>
      </figure>
      <figure>
        <a href="https://artisticswimming.ca/">
          <img className="teamLogo" src={CAS} alt="Canada Artistic Swimming" />
        </a>

        <figcaption>
          Canada Artistic
          <br />
          Swimming
        </figcaption>
      </figure>
      <figure>
        <a href="https://ontarioartisticswimming.ca/">
          <img className="teamLogo" src={OAS} alt="Ontario Artistic Swimming" />
        </a>

        <figcaption>
          Ontario Artistic
          <br />
          Swimming
        </figcaption>
      </figure>
      <figure>
        <a href="https://masterducks.ca/">
          <img className="teamLogo" src={MD} alt="Aurora Master Ducks" />
        </a>

        <figcaption>
          Aurora
          <br />
          Master Ducks
        </figcaption>
      </figure>
      <figure>
        <a href="https://www.ducksswimming.ca/">
          <img className="teamLogo" src={DS} alt="Ducks Swimming" />
        </a>

        <figcaption>Ducks Swimming</figcaption>
      </figure>
      <figure>
        <a href="https://www.waterpolo.ca/">
          <img className="teamLogo" src={WP} alt="Water Polo Canada" />
        </a>

        <figcaption>
          Water Polo
          <br />
          Canada
        </figcaption>
      </figure>
      <figure>
        <a href="https://www.maverickswaterpolo.ca/">
          <img className="teamLogo" src={MWP} alt="Mavericks Water Polo" />
        </a>

        <figcaption>
          Mavericks
          <br />
          Water Polo
        </figcaption>
      </figure>
      <figure>
        <a href="http://www.vaughanaquaticclub.com/">
          <img className="teamLogo" src={VAC} alt="Vaugh Aquatic Club" />
        </a>

        <figcaption>
          Vaughan
          <br />
          Aquatic Club
        </figcaption>
      </figure>
      <figure>
        <a href="https://www.ontariowaterpolo.ca/">
          <img className="teamLogo" src={OWP} alt="Ontario Water Polo Ontario" />
        </a>

        <figcaption>
          Ontario
          <br />
          Water Polo
        </figcaption>
      </figure>
      <figure>
        <a href="http://aurora.specialolympicsontario.ca/sports-programs/swimming">
          <img className="teamLogo" src={ASD} alt="Aurora Special Ducks" />
        </a>

        <figcaption>
          Aurora
          <br />
          Special Ducks
        </figcaption>
      </figure>
      <figure>
        <a href="https://www.teamunify.com/team/cannssc/page/home">
          <img className="teamLogo" src={STN} alt="Newmarket Stingrays" />
        </a>

        <figcaption>
          Newmarket
          <br />
          Stingrays
        </figcaption>
      </figure>
      <figure>
        <a href="https://neighbourhoodnetwork.org/">
          <img className="teamLogo" src={NN} alt="NeighbourhoodNetwork" />
        </a>

        <figcaption>
          Neighbourhood
          <br />
          Network
        </figcaption>
      </figure>
      <figure>
        <a href="https://stouffvilleswimclub.com/">
          <img className="teamLogo" src={SS} alt="Whitchurch Stouffville Swim Club" />
        </a>

        <figcaption>
        Whitchurch Stouffville 
          <br />
          Swim Club
        </figcaption>
      </figure>
      <figure>
        <a href="https://www.lifesavingsociety.com/">
          <img className="teamLogo" src={LS} alt="LifeSaving Society" />
        </a>

        <figcaption>
        Life Saving
          <br />
          Society
        </figcaption>
      </figure>
      <figure>
        <a href="http://www.yraa.com/src/">
          <img className="teamLogo" src={YR} alt="York Region Athletic Association" />
        </a>

        <figcaption>
        York Region<br />Athletic Association
        </figcaption>
      </figure>
      <figure>
        <a href="https://www.honsbergerphysio.com/">
          <img className="teamLogo" src={HO} alt="Honsberger Physio" />
        </a>

        <figcaption>
        Honsberger Physio
        </figcaption>
      </figure>
    </TeamStyled>
  )
}

export default OurTeam
