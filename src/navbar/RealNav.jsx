import React from 'react'
import { Link } from 'react-router-dom'

const RealNav = () => {
  return (
    <>
      <div className="resNavbar">
          <div className="home">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="bollywood">
            <Link to={"/bollywood"}>Bollywood</Link>
          </div>
          <div className="technology">
            <Link to={"/technology"}>Technology</Link>
          </div>
          <div className="hollywood">
            <Link to={"/hollywood"}>Hollywood</Link>
          </div>
          <div className="fitness">
            <Link to={"/fitness"}>Fitness</Link>
          </div>
          <div className="food">
            <Link to={"/food"}>Food</Link>
          </div>
        </div>
    </>
  )
}

export default RealNav