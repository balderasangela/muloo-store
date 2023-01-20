import { useState } from 'react'
import About from './About'

function NewListingForm({onAddListing}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [about, setAbout] = useState("")
    const [stock, setStock] = useState("")

   function handleSubmit(e) {
    e.preventDefault();
    const formData = {name,image,about,stock}

    fetch("http://localhost:3000/toys", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",

        },
        body:JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((newListing) => {
        onAddListing(newListing)
    })
   }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <label htmlFor="image">Image:</label>
    <input
      type="text"
      id="image"
      value={image}
      onChange={(e) => setImage(e.target.value)}
    />
    <label htmlFor="about">About:</label>
    <input
      type="text"
      id="about"
      value={about}
      onChange={(e) => setAbout(e.target.value)}
    />
    <label htmlFor="location">Stock:</label>
    <input
      type="text"
      id="stock"
      value={stock}
      onChange={(e) => setStock(e.target.value)}
    />
    <button type="submit">Add New Plushy</button>
  </form>
  )
}

export default NewListingForm