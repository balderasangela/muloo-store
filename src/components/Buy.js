import { useState, useEffect } from 'react';
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
        <li>
          <img src={toys.image} alt={toys.name} />
          <h1> {toys.name}</h1>
          <p key={toys.id}>{toys.about} </p>
          </li>
        </>
      ))}
    </ul>




  )
}

export default Buy