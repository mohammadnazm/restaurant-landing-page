import React from "react"
import { GiHumbergerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import images from "../../constants/images"
import "./Navbar.css"

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app_navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
  </nav>
)

export default Navbar
