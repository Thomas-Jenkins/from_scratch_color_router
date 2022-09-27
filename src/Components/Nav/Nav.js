import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="main">
      <div>
        <NavLink to="/display/0/128/0">
          <h1>
        Green (0,128,0)
          </h1>
        </NavLink>
      </div>
      <div>
        <NavLink to="/display/34/139/34">
          <h1>
        Forest Green (34,139,34)
          </h1>
        </NavLink>
      </div>
      <div>
        <NavLink to="/display/0/100/0">
          <h1>
        Dark Green (0,100,0)
          </h1>
        </NavLink>
      </div>
    </div>
  );
}