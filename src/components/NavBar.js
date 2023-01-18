import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "./logoforphase2.png"

function NavBar() {
  return (
    <div style={{height:60}} className="nav-container">
       <Link to="/" style={{textDecoration: "none"}} >
        { <span><img className="logo" src={logo} alt="logo for store"></img></span> }
        </Link>
        <div>
<NavLink to="/"><button>Home</button></NavLink>

<NavLink to="/about"><button>About</button></NavLink>
<NavLink to="/list"><button>List</button></NavLink>
<NavLink to="/buy"><button>Buy</button></NavLink>
</div>
    </div>
  )
}

export default NavBar