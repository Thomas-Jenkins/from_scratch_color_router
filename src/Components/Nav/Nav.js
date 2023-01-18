import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="main">
      <div>
        <NavLink className="seagreen" to="/display/46/139/87">
          <h1>
        Sea Green
          </h1>
        </NavLink>
      </div>
      <div>
        <NavLink className="lime" to="/display/50/205/50">
          <h1>
        Lime
          </h1>
        </NavLink>
      </div>
      <div>
        <NavLink className="darkgreen" to="/display/0/100/0">
          <h1>
        Dark Green
          </h1>
        </NavLink>
      </div>
    </div>
  );
}