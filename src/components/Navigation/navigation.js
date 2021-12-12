import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <ul className={s.nav__list}>
      <li className={s.nav__item}>
        <NavLink
          end
          to="/"
          className={({ isActive }) =>
            isActive ? s.nav__link_active : s.nav__link
          }
        >
          Home
        </NavLink>
      </li>
      <li className={s.nav__item}>
        <NavLink
          to={{
            pathname: 'movies',
            state: 5,
          }}
          className={({ isActive }) =>
            isActive ? s.nav__link_active : s.nav__link
          }
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
