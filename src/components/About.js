import React from 'react'
import aboutImage from './plushies.png'

function About() {
  return (
    <div class="container">

      <h1 className='aboutHeading'> About Muloo</h1>
      
      <p className='aboutText'>Muloo is a unique retail shop that caters to adults who love “kawaii” or “cute” character goods. We carry toys, gifts, apparel, accessories, art, and more, all inspired by Japanese and Los Angeles Pop Culture. Jamie Rivadeneira started the store, in 2006. Many items are imported from Japan!

      Muloo is a clothing brand! We manufacture official licensed clothing from brands like Sanrio, San-X, Pokémon, and Artist collaborations. We also feature special Pop-Up shops with local brands and brands from Japan.

      Muloo is a lifestyle brand. We curate theme parties and art shows, including the Hello Kitty Exhibition Art Show, at the Japanese American National Museum, in L.A.

      Muloo encourages people of all ages to embrace their love of cute things and share it with friends! Join the Cute Culture! </p>

      <img className="aboutImage" src={aboutImage} alt="lady with plushies"></img>
    </div>
  )
}

export default About