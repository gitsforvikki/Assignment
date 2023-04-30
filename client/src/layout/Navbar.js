import React from 'react';
import {Link} from 'react-router-dom';

let Navbar = ()=>{
  return(
    <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
          <div className="container">
            <Link to='/' className="navbar-brand">
              NTA
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/users/register" className="nav-link" >Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/users/admit-card" className="nav-link" >Admit card</Link>
                </li>
              </ul> 
            </div>
          </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar;