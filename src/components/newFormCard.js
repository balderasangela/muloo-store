import { useState} from 'react'

function newFormCard({listing, onDeleteListing}) {
    const [cart,setCart] = useState(0)
    const {name, image, about, stock} = listing;

    function handleDelete() {
        fetch(`http://localhost:3000/toys/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            onDeleteListing(id);
          });
      }

  return (
    <li className='card'>
        <div className='card-image'>
            <img src = {image} alt={about} />
        </div>

        <div className='card-info'>
            
        </div>
    </li>
  )
}

export default newFormCard