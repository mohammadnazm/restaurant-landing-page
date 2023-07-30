import React from "react"

import { data, images } from "../../constants"
import { SubHeading, MenuItem } from "../../components"
import "./SpecialMenu.css"

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center"></div>
      </div>
    </div>
  </div>
)

export default SpecialMenu
