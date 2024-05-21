import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moduleCss from './header.module.css';
import Loader from '../Loader/Loader';

const Header = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleComplete = () => setLoading(false);

    handleComplete();

    window.addEventListener('popstate', handleComplete);

    return () => {
      window.removeEventListener('popstate', handleComplete);
    };
  }, [location]);

  return (
    <header className={moduleCss.headerWrapper}>
      <nav className={moduleCss.headerNav}>
        {loading && <Loader />}
        <ul className={moduleCss.headerNav}>
          <li className={moduleCss.headerNavList}>
            <Link to="/" onClick={() => setLoading(true)}>
              Home
            </Link>
          </li>
          <li className={moduleCss.headerNavList}>
            <Link to="/catalog" onClick={() => setLoading(true)}>
              Catalog
            </Link>
          </li>
          <li className={moduleCss.headerNavList}>
            <Link to="/favorites" onClick={() => setLoading(true)}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
