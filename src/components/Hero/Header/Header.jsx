import React from 'react'
import "./Header.css"


const Header = () => {
  const  Logo = 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

  return (
    <div className="header">
<img src={Logo} alt="logo" className="logo"/>

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