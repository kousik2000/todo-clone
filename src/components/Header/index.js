// index.js header

import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <>
    <nav className="header-container">
      <h1 className="logo-name">TODO</h1>

      <div className="list-container">
        <ul>
          <Link className="nav-link" to="/">
            <li className="link-item">Todo</li>
          </Link>
          <Link className="nav-link" to="/stopwatch">
            <li className="link-item">Stopwatch</li>
          </Link>
          <Link className="nav-link" to="/remainder">
            <li className="link-item">Remainder</li>
          </Link>
          <Link className="nav-link" to="/notes">
            <li className="link-item">Notes</li>
          </Link>
        </ul>
      </div>

      <div className="profile-container">
        <img
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="profile"
          className="profile"
        />
      </div>
    </nav>
    <div className="app-list-container">
      <ul>
        <Link className="nav-link" to="/">
          <li className="link-item">Todo</li>
        </Link>
        <Link className="nav-link" to="/stopwatch">
          <li className="link-item">Stopwatch</li>
        </Link>
        <Link className="nav-link" to="/remainder">
          <li className="link-item">Remainder</li>
        </Link>
        <Link className="nav-link" to="/notes">
          <li className="link-item">Notes</li>
        </Link>
      </ul>
    </div>
  </>
)

export default Header
