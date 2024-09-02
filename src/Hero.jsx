import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
            <h1>Projects CMS</h1>
            <p>React, developed by Facebook, has emerged as a leading JavaScript library for building user interfaces, particularly for single-page applications.
                 It allows developers to create dynamic and responsive web applications with a component-based architecture.</p>
        </div>
        <div className="img-container">
            <img  src={heroImg} alt="heroImg"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
