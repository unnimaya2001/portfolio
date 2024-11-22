import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav () {
    console.log("Nav is rendering");
    return(
        <>
        <div className="Navbar">
        <div className="logo">
            <h1 ><Link to="/"> US </Link> </h1>
        </div>
            
           <ul className='navlinks'>
           <li ><Link to="/"> Home</Link></li>
            <li ><Link to="/About"> About</Link></li>
            <li ><Link to="/Project"> Project</Link></li>
            <li ><Link to="/Resume"> Resume</Link></li>
           </ul>
        </div>
     
        </>
    )

}