import React from "react"

import "./Newsletter.css"
import SubHeading from "../SubHeading/SubHeading"

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
      <p className="p__opensanss">And Never Miss Latest Updates</p>
    </div>
  </div>
)

export default Newsletter
