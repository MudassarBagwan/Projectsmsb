import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
            <h1>Projects</h1>
            
        </div>
        <div className="img-container">
            <img  src={heroImg} alt="heroImg"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
