import React from 'react'
import hero from './hero.png'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useEffect, useState } from 'react';





const Home = () => {

  const [toys, setToys] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((r) => r.json())
      .then((toys) => {
        setToys(toys);
      });
  }, []);

  return (



    <div className="hero">

      <div className='home-logo'>
        <img  style={{ width: '100%', height:'100%' }} src={hero} alt="main hero for muloo"></img>
      </div>


      <Fade>
        {toys.map((toys) => (
          <div key={toys}>
             <h2>{toys.name}</h2>
            <img style={{ width: '100%' }} src={toys.image} alt={toys.about} />
           
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Home