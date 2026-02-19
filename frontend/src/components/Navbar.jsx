import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-brand">CourseHub</h2>
      <div className="navbar-links">
        <NavLink to="/" end>Courses Offered</NavLink>
        <NavLink to="/enrolled">Enrolled</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
