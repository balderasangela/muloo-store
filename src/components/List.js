
import { useForm } from "../Hooks/useForm";



const List = ({ onAddToys }) => {
  
  const itsRewindTime = {
    name: "",
    image: "",
    about: "",
    stock: "",
  }

  const {formData, setFormData, handleChange} = useForm(itsRewindTime)

  

  const handleSubmit = (e) => {
    // e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({...formData}),
    };

    fetch("http://localhost:3000/toys", configObj)
      .then((r) => r.json())
      .then((toy) => {
        onAddToys(toy);
        setFormData(itsRewindTime);
      });
  };




  return (

  <form className="formListing" autoComplete="off" onSubmit={handleSubmit}>

{/* <div className="logo-form">
      <img src={hero} alt="main hero for muloo"></img>
    </div> */}

  <h1>Add new listing</h1>

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
  <label htmlFor="stock">Stock</label>
    <input
      type="number"
      id="stock"
      name="stock"
      onChange={handleChange}
      value={formData.stock}
    />

  <label htmlFor="about">About</label>
  <textarea
    id="about"
    name="about"
    onChange={handleChange}
    value={formData.about}
  />




  <button className = "listButton" type="submit" >Add Project</button>
</form>
  )
};

  export default List