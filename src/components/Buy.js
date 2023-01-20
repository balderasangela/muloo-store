import { useState, useEffect } from 'react';
import React from 'react'

function Buy() {
  const [toys, setToys] = useState([]);
  const [cart,setCart] = useState([])

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
        <li>
          <img src={toys.image} alt={toys.name} />
          <h1> {toys.name}</h1>
          <p key={toys.id}>{toys.about} </p>
          <button>ADD TO CART</button>
          </li>
        </>
      ))}
    </ul>




  )
}

export default Buy