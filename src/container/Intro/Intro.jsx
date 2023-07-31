import React from "react"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { meal } from "../../constants"
import "./Intro.css"

const Intro = () => (
  <div className="app__video">
    <video src={meal} />
  </div>
)

export default Intro
