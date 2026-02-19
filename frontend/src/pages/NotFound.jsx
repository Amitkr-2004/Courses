import { Link } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <p className="notfound-message">Page not found</p>
      <p className="notfound-hint">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="notfound-link">Back to Courses</Link>
    </div>
  );
};

export default NotFound;
