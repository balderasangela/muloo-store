import { useState } from "react";

const List = ({ onAddToys }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    about: "",
    stock: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData, stock: 0 }),
    };

    fetch("http://localhost:3000/toys", configObj)
      .then((resp) => resp.json())
      .then((toy) => {
        onAddToys(toy);
        setFormData({
          name: "",
          image: "",
          about: "",
          stock: ""
        });
      });
  };





  return (

  <form className="form" autoComplete="off" onSubmit={handleSubmit}>
  <h3>Add new listing</h3>

  <label htmlFor="name">Name</label>
  <input
    type="text"
    id="name"
    name="name"
    onChange={handleChange}
    value={formData.name}
  />

  <label htmlFor="image">Image</label>
  <input
    type="text"
    id="image"
    name="image"
    onChange={handleChange}
    value={formData.image}
  />
  
  <label htmlFor="about">About</label>
  <textarea
    id="about"
    name="about"
    onChange={handleChange}
    value={formData.about}
  />


<label htmlFor="stock">Stock</label>
  <input
    type="text"
    id="stock"
    name="stock"
    onChange={handleChange}
    value={formData.stock}
  />


  <button type="submit">Add Project</button>
</form>
  )
};

  export default List