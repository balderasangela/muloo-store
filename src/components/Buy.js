import { useState, useEffect,  } from 'react';
import React from 'react'


function Buy() {
  const [toys, setToys] = useState([]);
  

 
  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((r) => r.json())
      .then((toys) => {
        setToys(toys);
      });
  }, []);

  return (


    <ul className='container'>

      {toys.map((toys) => (
        <>
        <li key = {toys.id}>
          <img src={toys.image} alt={toys.name} />
          <h1 className='name-image'> {toys.name}</h1>
          <h2 className='about-image' key={toys.id}>{toys.about} </h2>
          <h3 className='stock-image'>Stock:{toys.stock}</h3>
          <button className='elsa-button' type="submit" >ADD TO CART</button>
          </li>
        </>
      ))}
    </ul>
    // </div>
  )
}

export default Buy