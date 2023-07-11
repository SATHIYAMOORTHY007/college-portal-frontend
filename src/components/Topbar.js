import React, { useContext } from 'react'
import AuthContext from '../Authcontext/Authcontext'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
function Topbar() {
  const { auth } = useContext(AuthContext)
 
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <div>
        <h6 class="mr-2 d-none d-lg-inline ">
          <TypeAnimation
            className="text-primary opacity-75 "
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'abc',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'abc College',
              1000,
              'abc College Of',
              1000,
              'abc College Of  Engineeing',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h6>
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown no-arrow">
          <h6 class="mr-2 d-none d-lg-inline text-gray-600">{auth.name}</h6>
          <i class="fa fa-user fa-lg" aria-hidden="true"></i>
        </li>
        <div class="topbar-divider d-none d-sm-block"></div>
        <Link to="/" class="nav-item dropdown no-arrow">
          <h6 className="text-danger">
            Logout
            <i class="fas fa-sign-out-alt"></i>
          </h6>
        </Link>
      </ul>
    </nav>
  )
}

export default Topbar
