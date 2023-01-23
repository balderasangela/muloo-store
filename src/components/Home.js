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
    <div className="slide-container">
      <Fade>
        {toys.map((toys) => (
          <div key={toys}>
            <img style={{ width: '100%' }} src={toys.image} />
            <h2>{toys.name}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Home