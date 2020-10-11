import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import icon from "../images/logo-icon-white.svg"

const StyledNavbar = Styled.nav`
.navList{
  position:fixed;
  left:0;
  top:0;
  width:100%;
  padding:.5em;
  margin:0;
  display:flex;
  flex-direction: row;
  list-style:none;
  justify-content:space-around;
  background-color:rgba(255,255,255,.8);
  z-index:5;
}
ul li::before{
  content:none;
}

li{
  list-style:none;
  font-weight:bold;
  text-shadow:0 0 5px #fff;
}

a{
  text-decoration:none;
}
.navButton{
  display:none;
}

@media (max-width: 600px) {
  .navList{
    display:none;
    flex-wrap:wrap;
    justify-content:center;
  }
  .navListActive{
    display:block;
    position: fixed;
  }
  .navButton{
    display:block;
    background-color:gray;
    color:white;
    position:fixed;
    right:0;
    top:0;
    z-index:100;
    text-align:center;
    padding:5px;
    border-radius: 10px 0 10px 10px;
    box-shadow: -2px 2px 3px #444;
  }
  li{
    margin-bottom:.5em;
  }
  .icon{
    width:50px;
  }

}
`
const clickHandler = () => {
  document.getElementById("navList").classList.toggle("navListActive")
}

const Navbar = () => {
  return (
    <StyledNavbar
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="button"
      tabIndex={0}
    >
      <div className="navButton">
        {/* &#x02133; */}
        <img src={icon} alt="navbar icon for mobile" className="icon" />
      </div>
      <ul className="navList" id="navList">
        <li id="nav">
          <Link to="#top">Home</Link>{" "}
        </li>
        <li>
          <Link to="#ourTeam">Our Team</Link>{" "}
        </li>
        <li>
          <Link to="#events">Events</Link>{" "}
        </li>
        <li>
          <Link to="#opportunity">Opportunities</Link>{" "}
        </li>
        <li>
          <Link to="#keymessage">Key Messages</Link>{" "}
        </li>
        <li>
          <Link to="#qa">Q&amp;A</Link>{" "}
        </li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
