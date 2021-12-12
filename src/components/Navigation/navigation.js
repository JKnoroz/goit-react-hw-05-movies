import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">Home page</Link>
    <Link to="/movies">Movies</Link>
  </nav>
);

export default Navigation;
