import React from 'react'
import { Link } from 'react-router-dom'
import error from './/assest/404page.png'

function Fallback() {
  return (
    <div className='error'>
        
        <Link to ="/"> 
        <img  style={{ width: '100%', height:'100%' }} src={error} alt="error page"></img>
        </Link>
    </div>
  )
}

export default Fallback