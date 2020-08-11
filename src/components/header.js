// import { Link } from "gatsby"
import React from "react"
import style from "./header.module.scss"

const clickHandler = () => {
  const els = document.getElementsByClassName(style.item)
  Array.prototype.forEach.call(els, function (e) {
    e.classList.toggle(style.active)
  })
}

const Header = () => (
  <nav>
    <ul className={style.menu}>
      <li className={style.logo}>
        <a href="#">LOGO</a>
      </li>
      <li className={style.item}>
        <a href="#">Link 01</a>
      </li>
      <li className={style.item}>
        <a href="#">Link 02</a>
      </li>
      <li className={style.item}>
        <a href="#">Link 03</a>
      </li>
      <li className={style.item}>
        <a href="#">Link 04</a>
      </li>
      <li className={`${style.item} ${style.button}`}>
        <a href="#">Button</a>
      </li>
      <li
        className={style.toggle}
        role="button"
        tabIndex={0}
        onClick={clickHandler}
        onKeyDown={clickHandler}
      >
        <span className={style.bars}></span>
      </li>
    </ul>
  </nav>
)

export default Header
