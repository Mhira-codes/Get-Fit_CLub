import React from 'react'
import "./Header.css"
import logo from "../../../assets/logo.png"


const Header = () => {
 return(
    <div className="header">
<img src={logo} alt="logo" className="logo"/>

<ul className='h-menu'>
<li>Home</li>
<li>Why us</li>
<li>Plans</li>
<li>Program</li>
<li>Testimonial</li>
</ul>

    </div>
  )
}

export default Header