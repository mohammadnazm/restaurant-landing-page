import React from "react"
import { SubHeading } from "../../components"
import "./Gallery.css"

const Gallery = () => (
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext-cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis
        ipsum turpis elit elit scelerisque egestas mu.
      </p>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
)

export default Gallery
