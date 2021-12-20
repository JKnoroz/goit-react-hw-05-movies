import { NavLink } from 'react-router-dom';
import s from './SubMenu.module.css';

export default function SubMenu() {
  return (
    <div className={s.subMenu}>
      <h4 className={s.subMenu__title}>Additional information</h4>
      <ul className={s.subMenu__list}>
        <li className={s.subMenu__item}>
          <NavLink className={s.subMenu__link} to="credits">
            Credits
          </NavLink>
        </li>
        <li className={s.subMenu__item}>
          <NavLink className={s.subMenu__link} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
