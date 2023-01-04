import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container text-center">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">CalC</Link>
              </li>
            </ul>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Footer
