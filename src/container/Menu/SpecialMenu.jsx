import React from "react"

import { data, images } from "../../constants"
import { SubHeading, MenuItem } from "../../components"
import "./SpecialMenu.css"

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you Palatte"></SubHeading>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
  </div>
)

export default SpecialMenu
