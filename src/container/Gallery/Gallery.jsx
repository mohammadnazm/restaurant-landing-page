import React from "react"
import { SubHeading } from "../../components"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import "./Gallery.css"

const Gallery = () => {
  const scrollRef = React.useRef()

  const scroll = direction => {
    const { current } = scrollRef
    if (direction === "left") {
      current.scrollLeft -= 300
    } else {
      current.scrollRight += 300
    }
  }
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}></div>
      </div>
      <div className="app__gallery-images_arrow">
        <BsArrowLeftShort
          className="gallery__arrow-icons"
          onClick={() => scroll("left")}
        />
        <BsArrowRightShort
          className="gallery__arrow-icons"
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  )
}

export default Gallery
