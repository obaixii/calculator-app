import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container text-center">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Calculator App</Link>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
